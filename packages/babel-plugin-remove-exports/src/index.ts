import { types as t, PluginObj, PluginPass } from '@babel/core';
import { Visitor } from '@babel/traverse';

interface Context extends PluginPass {
  identifiersToKeep: string[];
}

const identifierIdentifier: Visitor<Context> = {
  Identifier(path) {
    if (!t.isObjectProperty(path.parent) && !t.isTSType(path.parent)) {
      const identifier = path.node.name;
      const binding = path.scope.getBinding(identifier);

      if (!binding) {
        return;
      }

      const programScope = binding.scope.getProgramParent();
      if (programScope.hasBinding(identifier)) {
        this.identifiersToKeep.push(path.node.name);
      }
    }
  },
};

export default function (): PluginObj<Context> {
  return {
    pre() {
      this.identifiersToKeep = ['routeData'];
    },
    visitor: {
      Program: {
        exit(path) {
          const bodyPath = path.get('body');

          for (const statement of bodyPath) {
            const identifiers = statement.getBindingIdentifiers(false);

            if (
              !Object.keys(identifiers).some((name) =>
                this.identifiersToKeep.includes(name),
              )
            ) {
              statement.remove();
            }
          }
        },
      },
      ExportNamedDeclaration(path) {
        if (
          t.isVariableDeclaration(path.node.declaration) &&
          t.isIdentifier(path.node.declaration.declarations[0].id, {
            name: 'routeData',
          })
        ) {
          let declarationPath = path.get('declaration.declarations.0.init');

          if (Array.isArray(declarationPath)) {
            declarationPath = declarationPath[0];
          }

          declarationPath.traverse(identifierIdentifier, this);
        }
      },
    },
  };
}
