import { types as t, PluginObj, PluginPass } from '@babel/core';

type Context = PluginPass;

export default function (): PluginObj<Context> {
  return {
    visitor: {
      Program: {
        exit(path) {
          // path.scope.getAllBindings().filter(binding => {
          // })
        },
      },
      ExportNamedDeclaration(path) {
        if (
          t.isVariableDeclaration(path.node.declaration) &&
          t.isIdentifier(path.node.declaration.declarations[0].id, {
            name: 'routeData',
          })
        ) {
          console.log(path.scope.bindings.routeData.referencePaths);
        }

        // path.traverse({
        //   FunctionDeclaration(functionPath) {
        //     console.log(functionPath.scope.getAllBindings());
        //   },
        // });

        // path.remove();
      },
    },
  };
}
