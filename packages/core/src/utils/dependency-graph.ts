import assert from 'assert';
import path from 'path';

import { readJson } from 'fs-extra';

import type { PackageJson } from '../types';

import { promiseMap } from './promise-map';
import { resolveFrom } from './resolve-from';

const ROOT = 'ROOT';

interface Dependency {
  version: PackageJson['version'];
  dependents: string[];
  dependencies: string[];
  peerDependencies: string[];
}

type DepGraph = Map<string, Dependency>;

const loadPackage = async (packageJsonPath: string) =>
  (await readJson(packageJsonPath)) as PackageJson;

const anaylyseDependency = async (
  dependent: string,
  dep: string,
  rootDir: string,
  depGraph: DepGraph,
) => {
  if (dep.startsWith('@crackle/')) {
    return depGraph;
  }

  const packageJsonPath = await resolveFrom(rootDir, `${dep}/package.json`);
  const packageJson = await loadPackage(packageJsonPath);

  const dependencies = Object.keys(packageJson.dependencies ?? {});
  const peerDependencies = Object.keys(packageJson.peerDependencies ?? {});

  const dependency = depGraph.get(dep);

  if (dependency) {
    if (dependency.version !== packageJson.version) {
      throw new Error(
        `Found dependency "${dep}" with multiple versions:\n${JSON.stringify(
          dependency,
          null,
          2,
        )}\n${JSON.stringify({
          version: packageJson.version,
          dependencies,
        })}`,
      );
    }

    dependency.dependents.push(dependent);
  } else {
    depGraph.set(dep, {
      version: packageJson.version,
      dependents: [dependent],
      dependencies,
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

  const packageJson = await loadPackage(`${rootDir}/package.json`);

  const deps = Object.keys(packageJson.dependencies ?? {});

  const dependency: Dependency = {
    version: packageJson.version,
    dependents: [],
    dependencies: deps,
    peerDependencies: [],
  };

  depGraph.set(ROOT, dependency);

  await promiseMap(deps, async (childDep) => {
    try {
      await anaylyseDependency(ROOT, childDep, rootDir, depGraph);
    } catch (e) {
      // Ignore dep errors
    }
  });

  return depGraph;
};

export const getSsrExternalsForCompiledDependency = (
  depName: string,
  depGraph: DepGraph,
): { noExternal: string[] } => {
  const dependency = depGraph.get(depName);

  if (!dependency) {
    return {
      noExternal: [],
    };
  }

  const noExternals = new Set<string>();
  const dependents = new Set(dependency.dependents);

  for (const dependentName of dependents) {
    const dependent = depGraph.get(dependentName);
    assert(dependent);

    noExternals.add(dependentName);
    dependent.dependents.forEach((dep) => dependents.add(dep));
  }

  noExternals.delete(ROOT);

  return {
    noExternal: Array.from(noExternals),
  };
};
