import * as ts from 'typescript';
import { DocGen } from '../meta';

export function getNodePos(node: any, sourceFile: ts.SourceFile): DocGen.DeclarPos {
  const pos = {
    start: sourceFile.getLineAndCharacterOfPosition(node.getStart()),
    end: sourceFile.getLineAndCharacterOfPosition(node.getEnd()),
  };
  pos.start.line++;
  pos.start.character++;
  pos.end.line++;
  pos.end.character++;
  return pos;
}
