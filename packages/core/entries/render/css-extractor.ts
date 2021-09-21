import type { FileScope } from '@vanilla-extract/css';
import { setAdapter } from '@vanilla-extract/css/adapter';
import { transformCss } from '@vanilla-extract/css/transformCss';
import { loadStyleDefinitions, getCriticalStyles } from 'used-styles';

type CSSObj = any;

function stringifyFileScope({ packageName, filePath }: FileScope): string {
  return packageName ? `${filePath}$$$${packageName}` : filePath;
}

const bufferedCSSObjs = new Map<string, Array<CSSObj>>();
const cssByFileScope = new Map<string, string>();
const localClassNames = new Set<string>();
const composedClassLists: Array<any> = [];
const usedCompositions: Set<string> = new Set();

setAdapter({
  appendCss: (cssObj, fileScope) => {
    const fileScopeKey = stringifyFileScope(fileScope);
    let fileScopeCss = bufferedCSSObjs.get(fileScopeKey);

    if (!fileScopeCss) {
      fileScopeCss = [];
      bufferedCSSObjs.set(fileScopeKey, fileScopeCss);
    }

    fileScopeCss.push(cssObj);
  },
  registerClassName: (className) => {
    localClassNames.add(className);
  },
  registerComposition: (composition) => {
    composedClassLists.push(composition);
  },
  markCompositionUsed: (className) => {
    usedCompositions.add(className);
  },
  getIdentOption: () => 'debug',
  onEndFileScope: (fileScope) => {
    const fileScopeKey = stringifyFileScope(fileScope);
    const cssObjs = bufferedCSSObjs.get(fileScopeKey);

    const css = cssObjs
      ? transformCss({
          localClassNames: Array.from(localClassNames),
          composedClassLists,
          cssObjs,
        }).join('\n')
      : '';

    cssByFileScope.set(fileScopeKey, css);

    bufferedCSSObjs.set(fileScopeKey, []);
  },
});

export const inlineCriticalCss = async (
  html: string,
  criticalCssPlaceholder: string,
) => {
  const styleDefs = loadStyleDefinitions(
    () => Array.from(cssByFileScope.keys()),
    (fileScopeKey) => cssByFileScope.get(fileScopeKey) ?? '',
  );

  await styleDefs;

  const styles = getCriticalStyles(html, styleDefs);

  return html.replace(criticalCssPlaceholder, styles);
};
