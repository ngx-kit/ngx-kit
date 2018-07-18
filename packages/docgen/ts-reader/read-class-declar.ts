import * as ts from 'typescript';
import { DocGen } from '../meta';
import { compileClassMemberSignature } from './compile-signature';
import { checkIsDemo, checkIsInternal, readJsDoc } from './read-js-doc';
import { readNgMeta } from './read-ng-meta';
import { readNodesText, readNodeText } from './read-node-text';

export function readClassDeclar(node: any, sourceFile: ts.SourceFile): DocGen.ClassDeclar {
  const jsDoc = readJsDoc(node.jsDoc);
  return {
    kind: node.kind,
    kindString: 'class',
    jsDoc,
    isInternal: checkIsInternal(jsDoc),
    isDemo: checkIsDemo(jsDoc),
    decorators: readNodesText(node.decorators, sourceFile),
    modifiers: readNodesText(node.modifiers, sourceFile),
    name: readNodeText(node.name, sourceFile),
    members: readClassMembers(node['members'], sourceFile),
    ngMeta: readNgMeta(node.decorators, sourceFile),
  };
}

function readClassMembers(nodes: any[], sourceFile: ts.SourceFile): DocGen.ClassMember[] {
  return nodes
    ? nodes.map(node => {
      const jsDoc = readJsDoc(node.jsDoc);
      const m: DocGen.ClassMember = {
        kind: node.kind,
        name: node.kind === ts.SyntaxKind.Constructor ? 'constructor' : readNodeText(node.name, sourceFile),
        jsDoc,
        isInternal: checkIsInternal(jsDoc),
        decorators: readNodesText(node.decorators, sourceFile),
        modifiers: readNodesText(node.modifiers, sourceFile),
        parameters: readNodesText(node.parameters, sourceFile),
        type: readNodeText(node.type, sourceFile),
        initializer: readNodeText(node.initializer, sourceFile),
        text: readNodeText(node, sourceFile),
      };
      return {
        ...m,
        signature: compileClassMemberSignature(m),
      };
    })
    : [];
}
