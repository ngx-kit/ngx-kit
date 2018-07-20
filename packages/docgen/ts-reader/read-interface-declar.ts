import * as ts from 'typescript';
import { isArray } from 'util';
import { DocGen } from '../meta';
import { compileSignatureSignature } from './compile-signature';
import { checkIsInternal, readJsDoc } from './read-js-doc';
import { readNodesText, readNodeText } from './read-node-text';

export function readInterfaceDeclar(node: any, sourceFile: ts.SourceFile): DocGen.InterfaceDeclar {
  const jsDoc = readJsDoc(node.jsDoc);
  return {
    kind: node.kind,
    kindString: 'interface',
    jsDoc,
    isInternal: checkIsInternal(jsDoc),
    name: readNodeText(node.name),
    members: readInterfaceMembers(node.members, sourceFile),
  };
}

function readInterfaceMembers(members: any[], sourceFile: ts.SourceFile): DocGen.Signature[] | undefined {
  return members && isArray(members)
    ? members.map(member => readSignature(member, sourceFile) as DocGen.Signature)
    : undefined;
}

export function readSignature(node: any, sourceFile: ts.SourceFile): DocGen.Signature | undefined {
  // @todo check question token
  if (node) {
    const jsDoc = readJsDoc(node.jsDoc);
    const s: DocGen.Signature = {
      kind: node.kind,
      jsDoc,
      isInternal: checkIsInternal(jsDoc),
      modifiers: readNodesText(node.members, sourceFile),
      name: readNodeText(node.name, sourceFile),
      typeParameters: readNodesText(node.typeParameters, sourceFile),
      parameters: readNodesText(node.parameters, sourceFile),
      type: readNodeText(node.type, sourceFile),
      text: readNodeText(node, sourceFile),
    };
    return {
      ...s,
      signature: compileSignatureSignature(s),
    };
  } else {
    return undefined;
  }
}
