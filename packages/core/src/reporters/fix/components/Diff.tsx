/* eslint-disable react/no-unescaped-entities */
import { Text } from 'ink';
import * as React from 'react';

import type { Difference } from '../../../utils/setup-package-json';
import { List } from '../../shared/List';

export const Diff = ({ diff }: { diff: Difference }) => {
  if (diff.key === 'exports') {
    return <Text>- "exports" key updated</Text>;
  }

  if (diff.key === 'files' || diff.key === 'sideEffects') {
    const missingFiles = diff.additions.map((addition) => (
      <Text key={addition} color="blueBright">
        {addition}
      </Text>
    ));
    return missingFiles.length > 0 ? (
      <Text>
        - "{diff.key}" updated with:{' '}
        <List items={missingFiles} separator=", " />
      </Text>
    ) : (
      <Text>- "files" updated</Text>
    );
  }

  if (diff.key === 'order') {
    return <Text>- keys sorted</Text>;
  }

  if (diff.from && !diff.to) {
    return (
      <Text>
        - "{diff.key}" was removed (previously{' '}
        <Text color="yellow">{diff.from}</Text>).
      </Text>
    );
  }

  return (
    <Text>
      - "{diff.key}" was changed to <Text color="blueBright">{diff.to}</Text>
      {diff.from && (
        <>
          {' '}
          (previously <Text color="yellow">{diff.from}</Text>)
        </>
      )}
    </Text>
  );
};
