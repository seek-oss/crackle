import { colors } from '../entries/logger';
import type { Difference } from '../utils/setup-package-json';

const renderDiff = (diff: Difference) => {
  if (diff.key === 'exports') {
    return `The "exports" key is incorrect`;
  }

  if (diff.key === 'files' || diff.key === 'sideEffects') {
    const missingFiles = diff.additions.map((addition) =>
      colors.blueBright(addition),
    );
    return `"${diff.key}" is missing ${missingFiles.join(', ')}`;
  }

  if (diff.key === 'order') {
    return `keys are not sorted`;
  }

  if (diff.from && !diff.to) {
    return `"${diff.key}" needs to be removed (currently ${colors.yellow(
      diff.from,
    )})`;
  }

  if (diff.to) {
    return `"${diff.key}" should be ${colors.blueBright(diff.to)}${
      diff.from ? ` (currently ${colors.yellow(diff.from)})` : ''
    }`;
  }
};

export const renderPackageJsonValidationError = (diffs: Difference[]) => {
  const lines = ['The package.json is out of sync and needs to be fixed.'];

  for (const diff of diffs) {
    lines.push(`  - ${renderDiff(diff)}`);
  }

  lines.push('');
  lines.push('To fix, run `crackle fix`.');

  return lines.join('\n');
};
