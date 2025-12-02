import { promises as fs } from 'fs';

const routeTypePrefix = 'export declare type ValidRoute';

export const defineRoutes = async (routes: string[]) => {
  const linkDeclarationFilePath =
    require.resolve('@crackle/router/dist/declarations/src/valid-routes.d.ts');

  const contents = await fs.readFile(linkDeclarationFilePath, 'utf-8');

  const lines = contents.split('\n');

  const validRouteLineIndex = lines.findIndex((line) =>
    line.startsWith(routeTypePrefix),
  );

  if (validRouteLineIndex < 0) {
    throw new Error('Declaration file not set up correctly');
  }

  const validRoutesType = routes.map((route) => `'${route}'`).join(' | ');

  lines.splice(
    validRouteLineIndex,
    1,
    `${routeTypePrefix} = ${validRoutesType};`,
  );

  await fs.writeFile(linkDeclarationFilePath, lines.join('\n'), 'utf-8');
};
