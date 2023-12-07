import { type PluginObj, type PluginPass, types as t } from '@babel/core';
import type { NodePath, Visitor } from '@babel/traverse';

interface Context extends PluginPass {
  identifiersToKeep: Set<string>;
  opts: {
    retainExports?: string[];
    retainDefault?: boolean;
    retainIdentifiers?: string[];
  };
}

const handleIdentifier = (
  path: NodePath<t.Identifier | t.JSXIdentifier>,
  identifiersToKeep: Set<string>,
) => {
  const identifier = path.node.name;
  if (identifiersToKeep.has(identifier)) {
    return;
  }

  const binding = path.scope.getBinding(identifier);

  if (!binding) {
    return;
  }

  const programScope = binding.scope.getProgramParent();
  const programBinding = programScope.getBinding(identifier);

  if (programBinding) {
    identifiersToKeep.add(path.node.name);

    programBinding.path.traverse(identifierVisitor, { identifiersToKeep });
  }
};

const identifierVisitor: Visitor<{ identifiersToKeep: Set<string> }> = {
  Identifier(path) {
    handleIdentifier(path, this.identifiersToKeep);
  },
  JSXIdentifier(path) {
    handleIdentifier(path, this.identifiersToKeep);
  },
};

export default function (): PluginObj<Context> {
  return {
    pre() {
      this.identifiersToKeep = new Set<string>(this.opts.retainIdentifiers);
    },
    visitor: {
      Program: {
        exit(path, { opts }) {
          const bodyPath = path.get('body');

          for (const statement of bodyPath) {
            const identifiers = statement.getBindingIdentifiers(false);

            const statementBindsKeptIdentifier = Object.keys(identifiers).some(
              (name) => this.identifiersToKeep.has(name),
            );

            const statementNode = statement.node;
            const statementExportsKeptIdentifier =
              t.isExportNamedDeclaration(statementNode) &&
              statementNode.specifiers.some(
                (specifier) =>
                  t.isExportSpecifier(specifier) &&
                  this.identifiersToKeep.has(specifier.local.name),
              );

            if (
              !statementBindsKeptIdentifier &&
              !(
                statementExportsKeptIdentifier ||
                (opts.retainDefault &&
                  t.isExportDefaultDeclaration(statement.node))
              )
            ) {
              statement.remove();
            }
          }
        },
      },
      ExportNamedDeclaration(path, { opts }) {
        const { retainExports = [] } = opts;
        const specifiers = path.get('specifiers');

        if (specifiers && specifiers.length > 0) {
          const retainExportSpecifier = specifiers.find(
            (specifier) =>
              t.isIdentifier(specifier.node.exported) &&
              retainExports.includes(specifier.node.exported.name),
          ) as NodePath<t.ExportSpecifier> | undefined;

          if (retainExportSpecifier) {
            retainExportSpecifier.traverse(identifierVisitor, this);
          }
        }

        if (
          t.isVariableDeclaration(path.node.declaration) &&
          t.isIdentifier(path.node.declaration.declarations[0].id) &&
          retainExports.includes(path.node.declaration.declarations[0].id.name)
        ) {
          let declarationPath = path.get('declaration');

          if (Array.isArray(declarationPath)) {
            declarationPath = declarationPath[0];
          }

          declarationPath.traverse(identifierVisitor, this);
        }
      },
      ExportDefaultDeclaration(path, { opts }) {
        if (!opts.retainDefault) {
          return;
        }

        path.traverse(identifierVisitor, {
          identifiersToKeep: this.identifiersToKeep,
        });
      },
    },
  };
}
