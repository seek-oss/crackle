import path from 'path';

import * as fs from 'fs-extra';
import normalizePath from 'normalize-path';
import resolveFrom from 'resolve-from';

import { FatalError } from './errors';
// @ts-ignore
import { createLanguageServiceHostClass } from './language-service-host';

const buildDirectory = 'dist';

interface DeclarationFile {
  name: string;
  content: string;
}

interface EmittedDeclarationOutput {
  /** The emitted d.ts types file. */
  types: DeclarationFile;
  /** The emitted d.ts.map declaration map file. */
  map?: DeclarationFile;
}

type Typescript = typeof import('typescript');

const unsafeRequire = require;

const weakMemoize = function <Arg extends Record<string, unknown>, Return>(
  func: (arg: Arg) => Return,
): (arg: Arg) => Return {
  const cache: WeakMap<Arg, Return> = new WeakMap();
  return (arg) => {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }
    const ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize<V>(fn: (arg: string) => V): (arg: string) => V {
  const cache: { [key: string]: V } = {};

  return (arg: string) => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

async function nonMemoizedGetService(
  typescript: Typescript,
  configFileName: string,
) {
  const configFileContents = await fs.readFile(configFileName, 'utf8');
  const result = typescript.parseConfigFileTextToJson(
    configFileName,
    configFileContents,
  );

  result.config.compilerOptions.outDir = '.';

  const thing = typescript.parseJsonConfigFileContent(
    result.config,
    typescript.sys,
    process.cwd(),
    undefined,
    configFileName,
  );
  thing.options.declaration = true;
  thing.options.noEmit = false;

  const LanguageServiceHostClass = createLanguageServiceHostClass(typescript);

  const servicesHost = new LanguageServiceHostClass(thing, []);

  const service = typescript.createLanguageService(
    servicesHost,
    typescript.createDocumentRegistry(),
  );
  servicesHost.setLanguageService(service);
  const program = service.getProgram();
  if (!program) {
    throw new Error(
      'This is an internal error, please open an issue if you see this: program not found',
    );
  }
  return { service, options: thing.options, program };
}

const getService = weakMemoize((typescript: Typescript) =>
  memoize(async (configFileName: string) =>
    nonMemoizedGetService(typescript, configFileName),
  ),
);

export async function createDeclarationCreator(
  dirname: string,
  pkgName: string,
): Promise<{
  getDeps: (entrypoints: Array<string>) => Set<string>;
  getDeclarationFiles: (filename: string) => Promise<EmittedDeclarationOutput>;
}> {
  let typescript: Typescript;
  try {
    typescript = unsafeRequire(resolveFrom(dirname, 'typescript'));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      throw new FatalError(
        'an entrypoint source file ends with the .ts or .tsx extension but the typescript module could not be resolved from the project directory, please install it.',
        pkgName,
      );
    }
    throw err;
  }
  const configFileName = typescript.findConfigFile(
    dirname,
    typescript.sys.fileExists,
  );

  if (!configFileName) {
    throw new FatalError(
      'an entrypoint source file ends with the .ts or tsx extension but no TypeScript config exists, please create one.',
      pkgName,
    );
  }
  // if the tsconfig is inside the package directory, let's not memoize getting the ts service
  // since it'll only ever be used once
  // and if we keep it, we could run out of memory for large projects
  // if the tsconfig _isn't_ in the package directory though, it's probably fine to memoize it
  // since it should just be a root level tsconfig
  const {
    service,
    options: readOptions,
    program,
  } = await (normalizePath(configFileName) ===
  normalizePath(path.join(dirname, 'tsconfig.json'))
    ? nonMemoizedGetService(typescript, configFileName)
    : getService(typescript)(configFileName));

  const options = { ...readOptions, outDir: '.' };

  const moduleResolutionCache = typescript.createModuleResolutionCache(
    dirname,
    (x) => x,
    options,
  );

  const normalizedDirname = normalizePath(dirname);

  return {
    getDeps: (entrypoints: Array<string>) => {
      const resolvedEntrypointPaths = entrypoints.map((x) => {
        const { resolvedModule } = typescript.resolveModuleName(
          path.join(path.dirname(x), path.basename(x, path.extname(x))),
          dirname,
          options,
          typescript.sys,
          moduleResolutionCache,
        );
        if (!resolvedModule) {
          throw new Error(
            'This is an internal error, please open an issue if you see this: ts could not resolve module',
          );
        }
        return resolvedModule.resolvedFileName;
      });
      const allDeps = new Set<string>(resolvedEntrypointPaths);

      function searchDeps(deps: Set<string>) {
        for (const dep of Array.from(deps)) {
          const sourceFile = program!.getSourceFile(dep);
          if (!sourceFile) {
            throw new FatalError(
              `Could not generate type declarations because ${dep} is not in a TypeScript project. Make sure this file is included in your tsconfig.`,
              pkgName,
            );
          }
          const internalDeps = new Set<string>();
          for (const { text } of (sourceFile as any).imports) {
            const { resolvedModule } = typescript.resolveModuleName(
              text,
              dep,
              options,
              typescript.sys,
              moduleResolutionCache,
            );
            if (resolvedModule) {
              if (
                !allDeps.has(resolvedModule.resolvedFileName) &&
                !resolvedModule.isExternalLibraryImport &&
                resolvedModule.resolvedFileName.includes(normalizedDirname)
              ) {
                internalDeps.add(resolvedModule.resolvedFileName);
                allDeps.add(resolvedModule.resolvedFileName);
              }
            }
          }
          searchDeps(internalDeps);
        }
      }
      searchDeps(new Set(resolvedEntrypointPaths));
      return allDeps;
    },
    getDeclarationFiles: async (
      filename: string,
    ): Promise<EmittedDeclarationOutput> => {
      if (filename.endsWith('.d.ts')) {
        return {
          types: {
            name: filename.replace(
              normalizedDirname,
              normalizePath(path.join(dirname, buildDirectory, 'declarations')),
            ),
            content: await fs.readFile(filename, 'utf8'),
          },
        };
      }
      const output = service.getEmitOutput(filename, true, true);
      return output.outputFiles.reduce((emitted, { name, text }) => {
        if (name.endsWith('.d.ts')) {
          emitted.types = {
            name: name.replace(
              normalizedDirname,
              normalizePath(path.join(dirname, buildDirectory, 'declarations')),
            ),
            content: text,
          };
        }

        if (name.endsWith('.d.ts.map')) {
          emitted.map = {
            name: name.replace(
              normalizedDirname,
              normalizePath(path.join(dirname, buildDirectory, 'declarations')),
            ),
            content: text,
          };
        }

        return emitted;
      }, {} as EmittedDeclarationOutput);
    },
  };
}
