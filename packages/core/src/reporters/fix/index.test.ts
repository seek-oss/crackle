import { render as inkRender } from 'ink';
import { render } from 'ink-testing-library';
import stripAnsi from 'strip-ansi';

import { renderApp } from '.';

vi.mock('ink', async () => {
  const ink = await vi.importActual<any>('ink');
  return {
    ...ink,
    render: vi.fn(),
  };
});

expect.addSnapshotSerializer({
  serialize(val) {
    return stripAnsi(val);
  },
  test(val) {
    return typeof val === 'string';
  },
});

describe('fix reporter', () => {
  const renderWithArgs = (
    ...args: Parameters<typeof renderApp>
  ): ReturnType<typeof render> => {
    renderApp(...args);
    const tree = vi.mocked(inkRender).mock.calls[0][0];
    return render(tree);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('with no packages', () => {
    const { lastFrame } = renderWithArgs([]);

    expect(lastFrame()).toMatchInlineSnapshot('Nothing to fix!');
  });

  test('with unchanged packages', () => {
    const { lastFrame } = renderWithArgs([
      {
        packageName: 'pkg-a',
        diffs: [],
      },
      {
        packageName: 'pkg-b',
        diffs: [],
      },
    ]);

    expect(lastFrame()).toMatchInlineSnapshot(`
      Nothing to change for:
        pkg-a
        pkg-b
    `);
  });

  test('with changed packages', () => {
    const { lastFrame } = renderWithArgs([
      {
        packageName: 'pkg-a',
        diffs: [{ key: 'files', additions: ['entry-a', 'other-entry'] }],
      },
    ]);

    expect(lastFrame()).toMatchInlineSnapshot(`
      Fixed package.json for:
        pkg-a
          - "files" updated with: entry-a, other-entry
    `);
  });

  test('all the changes', () => {
    const { lastFrame } = renderWithArgs([
      {
        packageName: 'pkg-a',
        diffs: [
          { key: 'exports' },
          { key: 'files', additions: ['entry-a', 'other-entry'] },
          { key: 'main', from: 'index' },
          { key: 'module', from: 'module-index', to: 'module-new-index' },
        ],
      },
      {
        packageName: 'pkg-b',
        diffs: [],
      },
    ]);

    expect(lastFrame()).toMatchInlineSnapshot(`
      Fixed package.json for:
        pkg-a
          - "exports" key updated
          - "files" updated with: entry-a, other-entry
          - "main" was removed (previously index).
          - "module" was changed to module-new-index (previously module-index)

      Nothing to change for:
        pkg-b
    `);
  });
});
