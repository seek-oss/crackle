/* eslint-disable no-console */
import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import glob from 'fast-glob';
import { render, Text, Box } from 'ink';
import React, { useEffect, useState, useReducer, useContext } from 'react';
import externals from 'rollup-plugin-node-externals';
import { build as viteBuild } from 'vite';

import type { PartialConfig, EnhancedConfig } from './config';
import { getConfig } from './config';
import typescriptDeclarations from './rollup-plugin-ts-declarations';
import type { ManualChunksFn } from './types';
import { commonViteConfig } from './vite-config';
import { addVanillaDebugIds } from './vite-plugin-vanilla-libraries';

const manualChunks: ManualChunksFn = (id, { getModuleInfo }) => {
  if (
    cssFileFilter.test(id) ||
    getModuleInfo(id)?.importers.some((importer) =>
      cssFileFilter.test(importer),
    )
  ) {
    const [_projectRoot, localPath] = id.split('src/');
    return localPath.replace('/', '-').replace('.ts', '.js');
  }
};

const buildPackage = async (config: EnhancedConfig, packageName: string) => {
  const entries = await glob(['src/entries/*.ts', 'src/index.ts'], {
    absolute: true,
    cwd: config.root,
  });

  await viteBuild({
    ...commonViteConfig(config),
    plugins: [
      {
        ...externals({
          deps: true,
          packagePath: config.resolveFromRoot('./package.json'),
        }),
        enforce: 'pre',
      },
      typescriptDeclarations({
        directory: config.root,
        name: packageName,
        entrypoints: entries.map((entry) => ({ source: entry })),
      }),
      addVanillaDebugIds,
    ],
    logLevel: 'silent',
    build: {
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: '',
        formats: ['es'],
      },
      outDir: config.root,
      rollupOptions: {
        input: entries,
        treeshake: {
          moduleSideEffects: (id, external) => {
            if (external) {
              return false;
            }

            if (cssFileFilter.test(id)) {
              // Mark .css.ts files as side effect free except for reset and atoms as they
              // need to be hoisted to ensure they are first in the CSS order
              // TODO: make the reset and atom file checks more specific
              return id.includes('reset') || id.includes('atoms');
            }

            return true;
          },
        },
        output: {
          hoistTransitiveImports: false,
          manualChunks,
          chunkFileNames: (chunkInfo) => {
            const chunkPath = `dist/${chunkInfo.name}`;

            return chunkPath.endsWith('.js')
              ? chunkPath
              : `${chunkPath}.chunk.js`;
          },
          entryFileNames: (chunkInfo) =>
            chunkInfo.facadeModuleId?.includes('src/entries')
              ? `${path.basename(chunkInfo.facadeModuleId, '.ts')}/index.js`
              : `dist/${chunkInfo.name}.js`,
        },
      },
    },
  });
};

export const buildPackages = async (partialConfig?: PartialConfig) => {
  const config = getConfig(partialConfig);

  const monorepoPackages = await glob(['packages/*/package.json'], {
    cwd: config.root,
    absolute: true,
  });

  const isMonorepo = monorepoPackages.length > 0;

  const allPackageJsons = isMonorepo
    ? monorepoPackages
    : [config.resolveFromRoot('package.json')];
  const packagesToBuild = allPackageJsons.map((packageJsonPath) => ({
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    name: require(packageJsonPath).name,
    filePath: path.dirname(packageJsonPath),
  }));

  render(<App config={config} packages={packagesToBuild} />);
};

interface AppState {
  packages: AppProps['packages'];
  config: AppProps['config'];
  buildFailures: FailedBuild[];
  completedBuilds: number;
}

type Action =
  | { type: 'BUILD_FAILED'; payload: FailedBuild }
  | { type: 'BUILD_COMPLETED' };

const reducer: React.Reducer<AppState, Action> = (prevState, action) => {
  if (action.type === 'BUILD_FAILED') {
    return {
      ...prevState,
      buildFailures: [...prevState.buildFailures, action.payload],
      completedBuilds: prevState.completedBuilds + 1,
    };
  }

  if (action.type === 'BUILD_COMPLETED') {
    return {
      ...prevState,
      completedBuilds: prevState.completedBuilds + 1,
    };
  }

  return prevState;
};

interface FailedBuild {
  packageName: string;
  err: Error;
}

interface AppProps {
  config: EnhancedConfig;
  packages: Array<{ name: string; filePath: string }>;
}

const StateContext = React.createContext<
  [AppState, React.Dispatch<Action>] | null
>(null);

function App({ packages, config }: AppProps) {
  const reducerProps = useReducer(reducer, {
    packages,
    config,
    buildFailures: [],
    completedBuilds: 0,
  });

  const [state] = reducerProps;

  return (
    <StateContext.Provider value={reducerProps}>
      <Box flexDirection="column">
        {packages.map((pkg) => (
          <Package key={pkg.name} config={config} {...pkg} />
        ))}

        {state.buildFailures.length < 1 ||
        state.completedBuilds < packages.length ? null : (
          <Box
            flexDirection="column"
            borderColor="red"
            borderStyle="round"
            marginTop={1}
          >
            <Text color="red">Failed builds</Text>
            {state.buildFailures.map((failedBuild, index) => (
              <Box key={index} marginTop={1} flexDirection="column">
                <Text dimColor>{failedBuild.packageName}</Text>
                <Text>{failedBuild.err.stack}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </StateContext.Provider>
  );
}
interface PackageProps {
  name: string;
  filePath: string;
  config: EnhancedConfig;
}
function Package({ name, filePath, config }: PackageProps) {
  const [status, setStatus] = useState<BuildStatusProps['status']>('Building');

  const [_state, dispatch] = useContext(StateContext)!;

  useEffect(() => {
    const packageConfig = getConfig({ ...config, root: filePath });

    buildPackage(packageConfig, name)
      .then(() => {
        setStatus('Done');
        dispatch({ type: 'BUILD_COMPLETED' });
      })
      .catch((err) => {
        setStatus('Failed');
        dispatch({
          type: 'BUILD_FAILED',
          payload: { packageName: name, err },
        });
      });
  }, [config, dispatch, filePath, name]);

  return (
    <Box>
      <Box width={12}>
        <BuildStatus status={status} />
      </Box>
      <Text color="blue">{name}</Text>
    </Box>
  );
}

interface BuildStatusProps {
  status: 'Building' | 'Done' | 'Failed';
}
function BuildStatus({ status }: BuildStatusProps) {
  const colorMap = { Building: 'yellow', Done: 'green', Failed: 'red' };
  const padding = ''.padStart((10 - status.length) / 2, ' ');

  return (
    <Text inverse color={colorMap[status]}>
      {[padding, status, padding]}
    </Text>
  );
}
