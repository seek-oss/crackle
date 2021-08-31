export function tsTemplate(hasDefaultExport: boolean, relativePath: string) {
  const escapedPath = JSON.stringify(relativePath);
  return `export * from ${escapedPath};${
    hasDefaultExport ? `\nexport { default } from ${escapedPath};` : ''
  }\n`;
}

export function overwriteDeclarationMapSourceRoot(
  content: string,
  actualSourceRoot: string,
): string {
  const src = JSON.parse(content);
  src.sourceRoot = actualSourceRoot;
  return JSON.stringify(src);
}

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | Array<JSONValue>
  | { [key: string]: JSONValue | undefined };
