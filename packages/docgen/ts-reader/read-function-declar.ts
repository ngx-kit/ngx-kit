import * as ts from 'typescript';
import { DocGen, GenConfig } from '../meta';
import { compileFunctionSignature } from './compile-signature';
import { checkIsInternal, readJsDoc } from './read-js-doc';
import { readNodesText, readNodeText } from './read-node-text';

export function readFunctionDeclar(node: any, sourceFile: ts.SourceFile, config: GenConfig): DocGen.FunctionDeclar {
  const jsDoc = readJsDoc(node.jsDoc);
  const f: DocGen.FunctionDeclar = {
    kind: node.kind,
    kindString: 'function',
    jsDoc,
    isInternal: checkIsInternal(jsDoc),
    decorators: readNodesText(node.decorators, sourceFile),
    modifiers: readNodesText(node.modifiers, sourceFile),
    name: readNodeText(node.name, sourceFile),
    parameters: readNodesText(node.parameters, sourceFile),
    type: readNodeText(node.type, sourceFile),
  };
  return {
    ...f,
    signature: compileFunctionSignature(f),
  };
}
