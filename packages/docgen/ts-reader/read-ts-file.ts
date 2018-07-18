import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as ts from 'typescript';
import { DocGen } from '../meta';
import { readClassDeclar } from './read-class-declar';
import { readInterfaceDeclar } from './read-interface-declar';
import { readTypeAliasDeclar } from './read-type-alias-declar';

export function readTsFile(relativeFilePath: string, filePath: string): DocGen.TsFile {
  const sourceFile = ts.createSourceFile(
    relativeFilePath,
    readFileSync(resolve(filePath), {encoding: 'utf8'}),
    ts.ScriptTarget.Latest,
    true,
  );
  const declars = processFileNodes(sourceFile);
  const file: DocGen.TsFile = {
    fileName: relativeFilePath,
    type: 'ts',
    text: sourceFile.text,
    declars,
  };
  return file;
}

function processFileNodes(sourceFile: ts.SourceFile): DocGen.Declar[] {
  let declars: DocGen.Declar[] = [];
  ts.forEachChild(sourceFile, node => {
    declars = [...declars, ...processDeclarNode(node, sourceFile)];
  });
  return declars;
}

function processDeclarNode(node: ts.Node, sourceFile: ts.SourceFile): DocGen.Declar[] {
  switch (node.kind) {
    // 209 @todo
    case ts.SyntaxKind.VariableStatement:
      return [];
    // 229 @todo
    case ts.SyntaxKind.FunctionDeclaration:
      return [];
    // 230
    case ts.SyntaxKind.ClassDeclaration:
      return [readClassDeclar(node, sourceFile)];
    // 231
    case ts.SyntaxKind.InterfaceDeclaration:
      return [readInterfaceDeclar(node, sourceFile)];
    // 232 @todo
    case ts.SyntaxKind.TypeAliasDeclaration:
      return [readTypeAliasDeclar(node)];
    // 233 @todo
    case ts.SyntaxKind.EnumDeclaration:
      return [];
    // 234 @todo
    case ts.SyntaxKind.ModuleDeclaration:
      return [];
    // 239 @todo
    case ts.SyntaxKind.ImportDeclaration:
      return [];
    // 245 @todo
    case ts.SyntaxKind.ExportDeclaration:
      return [];
    default:
      return [];
  }
}
