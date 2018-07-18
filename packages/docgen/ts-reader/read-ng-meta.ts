import * as ts from 'typescript';
import { isArray } from 'util';
import { DocGen } from '../meta';
import { readNodeText } from './read-node-text';
import NgComponentMeta = DocGen.NgComponentMeta;
import NgDirectiveMeta = DocGen.NgDirectiveMeta;
import NgInjectableMeta = DocGen.NgInjectableMeta;
import NgModuleMeta = DocGen.NgModuleMeta;

export function readNgMeta(decorators: ts.Decorator[], sourceFile: ts.SourceFile): DocGen.NgMeta | undefined {
  if (decorators && isArray(decorators)) {
    // @todo process several decorators
    const decorator: ts.Decorator = decorators[0];
    if (decorator && ts.isDecorator(decorator)) {
      const expression = decorator.expression;
      if (ts.isCallExpression(expression)) {
        const name = readNodeText(expression.expression, sourceFile);
        switch (name) {
          case 'Directive': {
            const meta: NgDirectiveMeta = {
              type: 'Directive',
              decorator: {
                selector: readProp(expression, 'selector', sourceFile),
                exportAs: readProp(expression, 'exportAs', sourceFile),
              },
            };
            return meta;
          }
          case 'Component': {
            const meta: NgComponentMeta = {
              type: 'Component',
              decorator: {
                selector: readProp(expression, 'selector', sourceFile),
                exportAs: readProp(expression, 'exportAs', sourceFile),
              },
            };
            return meta;
          }
          case 'Injectable': {
            const meta: NgInjectableMeta = {
              type: 'Injectable',
              decorator: {
                providedIn: readProp(expression, 'providedIn', sourceFile),
              },
            };
            return meta;
          }
          case 'NgModule': {
            const meta: NgModuleMeta = {
              type: 'NgModule',
              decorator: {
                exports: readProp(expression, 'exports', sourceFile),
                providers: readProp(expression, 'providers', sourceFile),
              },
            };
            return meta;
          }
        }
      }
    }
  }
  return undefined;
}

function readProp(expression: ts.CallExpression, name: string, sourceFile: ts.SourceFile): string | undefined {
  const arg = expression.arguments[0];
  if (arg && ts.isObjectLiteralExpression(arg)) {
    const property = arg.properties.find(p => readNodeText(p.name, sourceFile) === name);
    if (property && ts.isPropertyAssignment(property)) {
      return readNodeText(property.initializer, sourceFile);
    }
  }
}
