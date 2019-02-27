import { DocGen, GenConfig } from '../meta';
import { checkIsInternal, readJsDoc } from './read-js-doc';
import { readNodesText, readNodeText } from './read-node-text';

export function readTypeAliasDeclar(node: any, config: GenConfig): DocGen.TypeAliasDeclar {
  const jsDoc = readJsDoc(node.jsDoc);
  return {
    kind: node.kind,
    kindString: 'typeAlias',
    jsDoc,
    isInternal: checkIsInternal(jsDoc),
    modifiers: readNodesText(node.members),
    name: readNodeText(node.name),
    typeParameters: readNodesText(node.typeParameters),
    type: readNodeText(node.type),
    ...config.addKindText ? {text: readNodeText(node)} : {},
  };
}
