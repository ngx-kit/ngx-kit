import * as ts from 'typescript';
import { DocGen } from '../meta';

export function compileClassMemberSignature(member: DocGen.ClassMember): string {
  return [
    member.decorators ? member.decorators.join(' ') + ' ' : '',
    member.modifiers ? member.modifiers.join(' ') + ' ' : '',
    member.kind === ts.SyntaxKind.GetAccessor ? 'get ' : '',
    member.kind === ts.SyntaxKind.SetAccessor ? 'set ' : '',
    member.name,
    isMethod(member.kind) ? `(${member.parameters ? member.parameters.join(', ') : ''})` : '',
    member.type ? `: ${member.type}` : '',
    member.initializer ? ` = ${member.initializer}` : '',
  ].join('');
}

function isMethod(kind: ts.SyntaxKind) {
  return [
    ts.SyntaxKind.Constructor,
    ts.SyntaxKind.MethodDeclaration,
    ts.SyntaxKind.GetAccessor,
    ts.SyntaxKind.SetAccessor,
  ].indexOf(kind) !== -1;
}

export function compileSignatureSignature(member: DocGen.Signature): string {
  return [
    member.modifiers ? member.modifiers.join(' ') + ' ' : '',
    member.kind === 158 ? `[${member.parameters ? member.parameters.join(', ') : ''}]` : '',
    member.name,
    member.kind !== 158 ? `(${member.parameters ? member.parameters.join(', ') : ''})` : '',
    member.type ? `: ${member.type}` : '',
  ].join('');
}
