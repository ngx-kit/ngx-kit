import * as ts from 'typescript';
import { isArray } from 'util';
import { DocGen, GenConfig } from '../meta';
import { compileSignatureSignature } from './compile-signature';
import { getNodePos } from './get-node-pos';
import { checkIsInternal, readJsDoc } from './read-js-doc';
import { readNodesText, readNodeText } from './read-node-text';

export function readInterfaceDeclar(node: any, sourceFile: ts.SourceFile, config: GenConfig): DocGen.InterfaceDeclar {
  const jsDoc = readJsDoc(node.jsDoc);
  return {
    kind: node.kind,
    kindString: 'interface',
    jsDoc,
    isInternal: checkIsInternal(jsDoc),
    name: readNodeText(node.name),
    members: readInterfaceMembers(node.members, sourceFile, config),
    pos: getNodePos(node, sourceFile),
  };
}

function readInterfaceMembers(members: any[], sourceFile: ts.SourceFile, config: GenConfig): DocGen.Signature[] | undefined {
  return members && isArray(members)
    ? members.map(member => readSignature(member, sourceFile, config) as DocGen.Signature)
    : undefined;
}

export function readSignature(node: any, sourceFile: ts.SourceFile, config: GenConfig): DocGen.Signature | undefined {
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
      optional: !!node.questionToken,
      ...config.addKindText ? {text: readNodeText(node, sourceFile)} : {},
    };
    return {
      ...s,
      signature: compileSignatureSignature(s),
    };
  } else {
    return undefined;
  }
}
