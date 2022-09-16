import path from 'path';

import { readJson } from 'fs-extra';
import { resolvePath } from 'mlly';

import { promiseMap } from './promise-map';

const root = 'ROOT';

interface Dependency {
  version: string;
  dependents: Array<string>;
  dependencies: Array<string>;
  peerDependencies: Array<string>;
}

type DepGraph = Map<string, Dependency>;

const anaylyseDependency = async (
  dependent: string,
  dep: string,
  rootDir: string,
  depGraph: DepGraph,
) => {
  if (dep.startsWith('@crackle/')) {
    return depGraph;
  }

  const packageJsonPath = await resolvePath(path.join(dep, 'package.json'), {
    url: rootDir,
  });

  const packageJson = await readJson(packageJsonPath);

  const dependencies: Array<string> =
    'dependencies' in packageJson ? Object.keys(packageJson.dependencies) : [];
  const peerDependencies: Array<string> =
    'peerDependencies' in packageJson
      ? Object.keys(packageJson.peerDependencies)
      : [];

  const dependency = depGraph.get(dep);

  if (dependency) {
    if (dependency.version !== packageJson.version) {
      throw new Error(
        `Found dependency "${dep}" with multiple versions:\n${JSON.stringify(
          dependency,
          null,
          2,
        )}\n${JSON.stringify({
          dependencies,
          version: packageJson.version,
        })}`,
      );
    }

    dependency.dependents.push(dependent);
  } else {
    depGraph.set(dep, {
      dependents: [dependent],
      dependencies,
      version: packageJson.version,
      peerDependencies,
    });

    await promiseMap([...dependencies, ...peerDependencies], (childDep) =>
      anaylyseDependency(
        dep,
        childDep,
        path.dirname(packageJsonPath),
        depGraph,
      ),
    );
  }
};

export const extractDependencyGraph = async (rootDir: string) => {
  const depGraph: DepGraph = new Map();

  const packageJson = await readJson(path.join(rootDir, 'package.json'));

  const deps: Array<string> =
    'dependencies' in packageJson ? Object.keys(packageJson.dependencies) : [];

  const dependency: Dependency = {
    dependents: [],
    dependencies: deps,
    version: packageJson.version,
    peerDependencies: [],
  };

  depGraph.set(root, dependency);

  await promiseMap(deps, async (childDep) => {
    try {
      await anaylyseDependency(root, childDep, rootDir, depGraph);
    } catch (e) {
      // Ignore dep errors
    }
  });

  return depGraph;
};

export const getSsrExternalsForCompiledDependency = (
  depName: string,
  depGraph: DepGraph,
): { external: Array<string>; noExternal: Array<string> } => {
  const dependency = depGraph.get(depName);

  if (!dependency) {
    return {
      external: [],
      noExternal: [],
    };
  }

  const externals = new Set<string>();
  const noExternals = new Set<string>();

  const dependents = [...dependency.dependents];

  for (const dependentName of dependents) {
    const dependent = depGraph.get(dependentName);

    if (!dependent) {
      throw new Error('WTF?');
    }

    noExternals.add(dependentName);

    for (const dep of dependent.dependencies) {
      externals.add(dep);
    }

    dependents.push(...dependent.dependents.filter((d) => d !== root));
  }

  return {
    external: Array.from(externals).filter(
      (external) => !noExternals.has(external),
    ),
    noExternal: Array.from(noExternals),
  };
};
