import { colors } from '../entries/logger';
import { partition } from '../utils/partition';
import type { Difference } from '../utils/setup-package-json';

export interface PackageDiffDetails {
  packageName: string;
  diffs: Difference[];
}

const renderDiff = (diff: Difference) => {
  if (diff.key === 'exports') {
    return `"exports" key updated`;
  }

  if (diff.key === 'files' || diff.key === 'sideEffects') {
    const missingFiles = diff.additions.map((addition) =>
      colors.blueBright(addition),
    );
    return `"${diff.key}" updated${
      missingFiles.length > 0 ? ` with: ${missingFiles.join(', ')}` : ''
    }`;
  }

  if (diff.key === 'order') {
    return `keys sorted`;
  }

  if (diff.from && !diff.to) {
    return `"${diff.key}" was removed (previously ${colors.yellow(diff.from)})`;
  }

  if (diff.to) {
    return `"${diff.key}" was changed to ${colors.blueBright(diff.to)}${
      diff.from ? ` (previously ${colors.yellow(diff.from)})` : ''
    }`;
  }
};

export const renderDiffs = (packageDiffs: PackageDiffDetails[]) => {
  const [changedPackages, unchangedPackages] = partition(
    packageDiffs,
    (diff) => diff.diffs.length > 0,
  );

  const lines: string[] = [];

  if (changedPackages.length > 0) {
    lines.push('Fixed package.json for:');
    for (const packageDiff of changedPackages) {
      lines.push(`  \`${packageDiff.packageName}\``);
      for (const diff of packageDiff.diffs) {
        lines.push(`    - ${renderDiff(diff)}`);
      }
    }
  }

  if (unchangedPackages.length > 0) {
    if (lines.length > 0) {
      lines.push('');
    }
    if (unchangedPackages.length === 1) {
      lines.push(
        `Nothing to change for \`${unchangedPackages[0].packageName}\``,
      );
    } else {
      lines.push('Nothing to change for:');
      lines.push(...unchangedPackages.map((pkg) => `  \`${pkg.packageName}\``));
    }
  }

  return lines.join('\n');
};
