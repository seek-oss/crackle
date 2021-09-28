import path from 'path';

import normalizePath from 'normalize-path';
import type { Plugin } from 'rollup';

import { promiseMap } from '../utils/promise-map';

import { createDeclarationCreator } from './create-generator';
import { FatalError } from './errors';
import type { Package } from './types/package';
import { overwriteDeclarationMapSourceRoot, tsTemplate } from './utils';

export const isTsPath = (source: string) => /\.tsx?/.test(source);

export default function typescriptDeclarations(pkg: Package): Plugin {
  if (!pkg.entrypoints.some(({ source }) => isTsPath(source))) {
    return { name: 'typescript-declarations' };
  }

  return {
    name: 'typescript-declarations',
    async generateBundle(opts, bundle) {
      const creator = await createDeclarationCreator(pkg.directory, pkg.name);

      const srcFilenameToDtsFilenameMap = new Map<string, string>();

      const deps = creator.getDeps(pkg.entrypoints.map((x) => x.source));
      await promiseMap(Array.from(deps), async (dep) => {
        const { types, map } = await creator.getDeclarationFiles(dep);

        srcFilenameToDtsFilenameMap.set(normalizePath(dep), types.name);

        this.emitFile({
          type: 'asset',
          fileName: path.relative(opts.dir!, types.name),
          source: types.content,
        });

        if (map) {
          const sourceRoot = normalizePath(
            path.dirname(path.relative(path.dirname(map.name), dep)),
          );
          const source = overwriteDeclarationMapSourceRoot(
            map.content,
            sourceRoot,
          );

          this.emitFile({
            type: 'asset',
            fileName: path.relative(opts.dir!, map.name),
            source,
          });
        }
      });

      // eslint-disable-next-line guard-for-in
      for (const n in bundle) {
        const file = bundle[n];
        if (
          file.type === 'asset' ||
          !file.isEntry ||
          file.facadeModuleId == null
        ) {
          continue;
        }
        const facadeModuleId = file.facadeModuleId;

        const dtsFilename = srcFilenameToDtsFilenameMap.get(
          normalizePath(facadeModuleId),
        );

        if (!dtsFilename) {
          throw new FatalError(
            `no .d.ts file was found for the entrypoint at ${facadeModuleId}`,
            pkg.name,
          );
        }

        const mainFieldPath = file.fileName.replace(/\.js$/, '');
        let relativeToSource = path.relative(
          path.dirname(path.join(opts.dir!, file.fileName)),
          dtsFilename.replace(/\.d\.ts$/, ''),
        );
        if (!relativeToSource.startsWith('.')) {
          relativeToSource = `./${relativeToSource}`;
        }
        const tsFileSource = tsTemplate(
          file.exports.includes('default'),
          normalizePath(relativeToSource),
        );
        const tsFileName = `${mainFieldPath}.d.ts`;
        this.emitFile({
          type: 'asset',
          fileName: tsFileName,
          source: tsFileSource,
        });
      }
    },
  };
}
