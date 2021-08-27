import { setAdapter } from '@vanilla-extract/css/adapter';
import { transformCss } from '@vanilla-extract/css/transformCss';
import { loadStyleDefinitions, getCriticalStyles } from 'used-styles';

const cache = new WeakMap();

export function criticalCss() {
  let bufferedCSSObjs: Array<any> = [];
  const localClassNames = new Set<string>();
  const composedClassLists: Array<any> = [];
  const actualCss: Array<string> = [];
  const usedCompositions: Set<string> = new Set();

  setAdapter({
    appendCss: (cssObj: any) => {
      bufferedCSSObjs.push(cssObj);
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
    onEndFileScope: () => {
      const css = transformCss({
        localClassNames: Array.from(localClassNames),
        composedClassLists,
        cssObjs: bufferedCSSObjs,
      });

      actualCss.push(css.join('\n'));

      bufferedCSSObjs = [];
    },
  });

  const getCriticalStyle = async (key: any, markup: string) => {
    const unusedCompositions = composedClassLists
      .filter(({ identifier }) => !usedCompositions.has(identifier))
      .map(({ identifier }) => identifier);

    const unusedCompositionRegex =
      unusedCompositions.length > 0
        ? RegExp(`(${unusedCompositions.join('|')})\\s`, 'g')
        : null;

    let styleData = cache.get(key);

    if (!styleData) {
      styleData = loadStyleDefinitions(
        () => actualCss,
        (css) => css,
      );
      cache.set(key, styleData);

      await styleData;
    }

    const styles = getCriticalStyles(markup, styleData);

    const html = unusedCompositionRegex
      ? markup.replace(unusedCompositionRegex, '')
      : markup;

    return { styles, html };
  };

  return getCriticalStyle;
}
