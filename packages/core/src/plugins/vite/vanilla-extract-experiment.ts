import path from 'path';

import type { IdentifierOption } from '@vanilla-extract/integration';
import {
  cssFileFilter,
  virtualCssFileFilter,
  processVanillaFile,
  getSourceFromVirtualCssFile,
  compile,
  hash,
  getPackageInfo,
  addFileScope,
} from '@vanilla-extract/integration';
import type { Plugin, ResolvedConfig } from 'vite';
import { normalizePath } from 'vite';

interface Options {
  identifiers?: IdentifierOption;
}
export function vanillaExtractPlugin({ identifiers }: Options = {}): Plugin {
  let config: ResolvedConfig;
  let packageInfo: ReturnType<typeof getPackageInfo>;
  const cssMap = new Map<string, string>();

  return {
    name: 'crackle:vanilla-extract-experiment',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      config = resolvedConfig;

      packageInfo = getPackageInfo(config.root);
    },
    resolveId(id) {
      if (virtualCssFileFilter.test(id)) {
        const { fileName, source } = getSourceFromVirtualCssFile(id);

        // resolveId shouldn't really cause a side-effect however custom module meta isn't currently working
        // This is a hack work around until https://github.com/vitejs/vite/issues/3240 is resolved
        const shortHashFileName = normalizePath(
          `${fileName}?hash=${hash(source)}`,
        );
        cssMap.set(shortHashFileName, source);

        return shortHashFileName;
      }
    },
    load(id) {
      if (cssMap.has(id)) {
        const css = cssMap.get(id);

        cssMap.delete(id);

        return css;
      }

      return null;
    },
    async transform(code, id, ssr) {
      if (!cssFileFilter.test(id)) {
        return null;
      }

      if (ssr) {
        return addFileScope({
          source: code,
          filePath: normalizePath(path.relative(packageInfo.dirname, id)),
          packageInfo,
        }).source;
      }

      const { source, watchFiles } = await compile({
        filePath: id,
        cwd: config.root,
      });

      for (const file of watchFiles) {
        this.addWatchFile(file);
      }

      return processVanillaFile({
        source,
        filePath: id,
        outputCss: !ssr,
        identOption:
          identifiers ?? (config.mode === 'production' ? 'short' : 'debug'),
      });
    },
  };
}
