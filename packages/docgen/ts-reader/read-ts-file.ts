import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as ts from 'typescript';
import { DocGen, GenConfig } from '../meta';
import { readClassDeclar } from './read-class-declar';
import { readFunctionDeclar } from './read-function-declar';
import { readInterfaceDeclar } from './read-interface-declar';
import { readTypeAliasDeclar } from './read-type-alias-declar';

export function readTsFile(relativeFilePath: string, filePath: string, config: GenConfig): DocGen.TsFile {
  const sourceFile = ts.createSourceFile(
    relativeFilePath,
    readFileSync(resolve(filePath), {encoding: 'utf8'}),
    ts.ScriptTarget.Latest,
    true,
  );
  const declars = processFileNodes(sourceFile, config);
  const file: DocGen.TsFile = {
    fileName: relativeFilePath,
    type: 'ts',
    declars,
    ...config.addFileText ? {text: sourceFile.text} : {},
  };
  return file;
}

function processFileNodes(sourceFile: ts.SourceFile, config: GenConfig): DocGen.Declar[] {
  let declars: DocGen.Declar[] = [];
  ts.forEachChild(sourceFile, node => {
    declars = [...declars, ...processDeclarNode(node, sourceFile, config)];
  });
  return declars;
}

function processDeclarNode(node: ts.Node, sourceFile: ts.SourceFile, config: GenConfig): DocGen.Declar[] {
  switch (node.kind) {
    // 209 @todo
    case ts.SyntaxKind.VariableStatement:
      return [];
    // 229 @todo
    case ts.SyntaxKind.FunctionDeclaration:
      return [readFunctionDeclar(node, sourceFile, config)];
    // 230
    case ts.SyntaxKind.ClassDeclaration:
      return [readClassDeclar(node, sourceFile, config)];
    // 231
    case ts.SyntaxKind.InterfaceDeclaration:
      return [readInterfaceDeclar(node, sourceFile, config)];
    // 232 @todo
    case ts.SyntaxKind.TypeAliasDeclaration:
      return [readTypeAliasDeclar(node, config)];
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
