import type { PluginObj, PluginPass } from '@babel/core';
import { types as t } from '@babel/core';
import type { NodePath, Visitor } from '@babel/traverse';

interface Context extends PluginPass {
  identifiersToKeep: Set<string>;
}

const identifierIdentifier: Visitor<Context> = {
  Identifier(path) {
    const identifier = path.node.name;
    if (this.identifiersToKeep.has(identifier)) {
      return;
    }

    const binding = path.scope.getBinding(identifier);

    if (!binding) {
      return;
    }

    const programScope = binding.scope.getProgramParent();
    const programBinding = programScope.getBinding(identifier);

    if (programBinding) {
      this.identifiersToKeep.add(path.node.name);

      programBinding.path.traverse(identifierIdentifier, this);
    }
  },
};

export default function (): PluginObj<Context> {
  return {
    pre() {
      this.identifiersToKeep = new Set<string>();
    },
    visitor: {
      Program: {
        exit(path) {
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
              !statementExportsKeptIdentifier
            ) {
              statement.remove();
            }
          }
        },
      },
      ExportNamedDeclaration(path) {
        const specifiers = path.get('specifiers');

        if (specifiers && specifiers.length > 0) {
          const routeDataSpecifier = specifiers.find((specifier) =>
            t.isIdentifier(specifier.node.exported, { name: 'routeData' }),
          ) as NodePath<t.ExportSpecifier> | undefined;

          if (routeDataSpecifier) {
            routeDataSpecifier.traverse(identifierIdentifier, this);
          }
        }

        if (
          t.isVariableDeclaration(path.node.declaration) &&
          t.isIdentifier(path.node.declaration.declarations[0].id, {
            name: 'routeData',
          })
        ) {
          let declarationPath = path.get('declaration');

          if (Array.isArray(declarationPath)) {
            declarationPath = declarationPath[0];
          }

          declarationPath.traverse(identifierIdentifier, this);
        }
      },
    },
  };
}
