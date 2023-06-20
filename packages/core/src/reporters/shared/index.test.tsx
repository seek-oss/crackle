import { Text } from 'ink';
import { render } from 'ink-testing-library';
import { describe, expect, test } from 'vitest';
import inkSerializer from '~utils/ink-serializer';

import { Stack } from '.';

expect.addSnapshotSerializer(inkSerializer);

describe('Stack', () => {
  test('with a single child', () => {
    const { lastFrame } = render(
      <Stack>
        <Text>first child</Text>
      </Stack>,
    );

    expect(lastFrame()).toMatchInlineSnapshot('"first child"');
  });

  test('with multiple children', () => {
    const { lastFrame } = render(
      <Stack>
        <Text>first child</Text>
        <Text>second child</Text>
      </Stack>,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "first child

      second child"
    `);
  });

  test('with falsy children', () => {
    const { lastFrame } = render(
      <Stack>
        <Text>first child</Text>
        {null}
        {false}
        <Text>fourth child</Text>
      </Stack>,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "first child

      fourth child"
    `);
  });

  test('with a gap', () => {
    const { lastFrame } = render(
      <Stack gap={2}>
        <Text>first child</Text>
        <Text>second child</Text>
      </Stack>,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "first child


      second child"
    `);
  });

  test('with an indent', () => {
    const { lastFrame } = render(
      <Stack indent={2}>
        <Text>first child</Text>
        <Text>second child</Text>
      </Stack>,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "  first child

        second child"
    `);
  });
});
