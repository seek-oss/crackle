// Modified from https://github.com/preconstruct/preconstruct/blob/9c1c51be18856f7a7fca601186692cef58e7b154/packages/eslint-plugin-format-js-tag/src/index.ts
import path from 'path';

import { ESLintUtils } from '@typescript-eslint/utils';
import prettier from 'prettier';

// eslint-disable-next-line new-cap
const createRule = ESLintUtils.RuleCreator((name) => `${name}.md`);
const messages = {
  unformatted: 'The content of this is not formatted',
};

type MessageId = keyof typeof messages;

const tags = {
  js: true,
  ts: true,
  tsx: true,
};

const rules = {
  format: createRule<[], MessageId>({
    name: 'format',
    defaultOptions: [],
    meta: {
      docs: {
        description: 'Formats `js`, `ts` and `tsx` template tags with Prettier',
      },
      messages,
      schema: [],
      type: 'layout',
      fixable: 'whitespace',
    },
    create(context) {
      return {
        TaggedTemplateExpression(node) {
          if (
            node.tag.type === 'Identifier' &&
            node.tag.name in tags &&
            node.quasi.expressions.length === 0
          ) {
            const str = node.quasi.quasis[0].value.cooked;
            const sourceLines = context.sourceCode.getLines();
            const line = sourceLines[node.tag.loc.start.line - 1];
            const startingSpace = line.match(/^\s*/)?.[0] ?? '';
            const indentation = ''.padEnd(startingSpace.length + 2);
            const lines = prettier
              .format(str, {
                filepath: path.join(
                  path.dirname(context.filename),
                  `lint.${node.tag.name}`,
                ),
              })
              .split('\n');
            const formatted = `\n${lines
              .map((_line, i) => {
                if (i === lines.length - 1) {
                  return ''.padEnd(startingSpace.length) + _line;
                }
                if (_line === '') {
                  return '';
                }
                return indentation + _line;
              })
              .join('\n')}`;
            if (formatted !== str) {
              context.report({
                messageId: 'unformatted',
                node: node.tag,
                fix(fixer) {
                  return fixer.replaceText(node.quasi, `\`${formatted}\``);
                },
              });
            }
          }
        },
      };
    },
  }),
};

const plugin = {
  rules,
};

export default plugin;
