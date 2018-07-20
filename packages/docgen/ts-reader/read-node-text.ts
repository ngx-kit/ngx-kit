import * as ts from 'typescript';
import { isArray } from 'util';

export function readNodeText(node: any, sourceFile?: ts.SourceFile): string | undefined {
  return node
    ? node.getText(sourceFile)
    : undefined;
}

export function readNodesText(nodes: any[], sourceFile?: ts.SourceFile): string[] | undefined {
  return nodes && isArray(nodes)
    ? nodes.map(node => readNodeText(node, sourceFile) as string)
    : undefined;
}
