import * as ts from 'typescript';

export interface GenArgs {
  project: string;
  output: string;
}

export namespace DocGen {
  export interface Doc {
    files: File[];
    filesMap: any;
  }

  export interface File {
    fileName: string;
    type: string;
    text: string;
  }

  export interface TsFile extends File {
    type: 'ts';
    declars: Declar[];
  }

  export interface MdFile extends File {
    type: 'md';
    name: string;
    content: string;
    meta?: {
      [key: string]: any;
    };
  }

  // Declar

  export interface Declar {
    kind: ts.SyntaxKind;
    kindString: 'export' | 'class' | 'interface' | 'typeAlias';
    jsDoc?: JsDoc[];
    isInternal?: boolean;
  }

  export interface JsDoc {
    comment: string;
    tags: {
      name: string;
      value: string;
    }[];
  }

  export interface Decorator {
    name: string;
    arguments?: Initializer[];
  }

  // Export declar

  export interface ExportDeclar extends Declar {
    kindString: 'export';
    text: string;
  }

  // Class declar

  export interface ClassDeclar extends Declar {
    kindString: 'class';
    isDemo?: boolean;
    decorators?: string[];
    modifiers?: string[];
    name: string;
    members: ClassMember[];
    ngMeta?: NgMeta;
  }

  export interface ClassMember {
    kind: ts.SyntaxKind;
    kindString?: 'property' | 'constructor' | 'method' | 'getter' | 'setter';
    name: string;
    jsDoc: JsDoc[];
    isInternal?: boolean;
    decorators?: string[];
    modifiers?: string[];
    parameters?: string[];
    type?: string;
    initializer?: string;
    signature?: string;
    text?: string;
  }

//  export interface PropertyClassMember extends ClassMember {
//    kindString: 'property';
//    type?: Type;
//    typeText?: string;
//    initializer: any;
//    decoratorsText?: string[];
//    modifiersText?: string[];
//    initializerText?: string;
//  }
//
//  export interface MethodClassMember extends ClassMember {
//    kindString: 'method' | 'getter' | 'setter' | 'constructor';
//    type?: Type;
//    parameters?: MethodParameter[];
//  }

  export interface Modifier {
    kind: ts.SyntaxKind;
    kindString: 'private' | 'public' | 'protected' | 'readonly' | 'abstract' | 'export' | 'static' | 'yield';
  }

  export interface MethodParameter {
    name: string;
    type?: Type;
    initializer?: any;
    decorators?: Decorator[];
  }

  // Type

  export interface Type {
    kind: ts.SyntaxKind;
    kindString: 'void' | 'string' | 'number' | 'boolean' | 'never' | 'reference' | 'object' | 'type' | 'array'
      | 'tuple' | 'literal' | 'null' | 'true' | 'false' | 'any' | 'union' | 'parenthesized' | 'function'
      | 'undefined' | 'mapped' | 'indexedAccess';
  }

  export interface ReferenceType extends Type {
    kindString: 'reference';
    typeName: string;
    typeArguments?: Type[];
  }

  export interface FunctionType extends Type {
    kindString: 'function';
    parameters?: MethodParameter[];
    type?: Type;
  }

  export interface TypeType extends Type {
    kindString: 'type';
    members: TypeMember[];
  }

  export interface ArrayType extends Type {
    kindString: 'array';
    elementType?: Type;
  }

  export interface TupleType extends Type {
    kindString: 'tuple';
    elementTypes?: Type[];
  }

  export interface UnionType extends Type {
    kindString: 'union';
    types?: Type[];
  }

  export interface ParenthesizedType extends Type {
    kindString: 'parenthesized';
    parameters?: MethodParameter[];
    type?: Type;
  }

  export interface IndexedAccessType extends Type {
    kindString: 'indexedAccess';
    objectType?: Type;
    indexType?: Type;
  }

  export interface MappedType extends Type {
    kindString: 'mapped';
    typeParameter?: TypeParameter;
    type?: Type;
  }

  export interface LiteralType extends Type {
    kindString: 'literal';
    literal?: {
      type: 'numeric' | 'string';
      text: string;
    };
  }

  export interface TypeMember {
    name: string;
    type?: Type;
  }

  export interface TypeParameter {
    name: string;
    constraint?: Type;
  }

  // Initializer

  export interface Initializer {
    kind: ts.SyntaxKind;
    kindString: 'stringLiteral' | 'identifier' | 'falseKeyword' | 'trueKeyword' | 'arrayLiteralExpression'
      | 'objectLiteralExpression' | 'newExpression' | 'nullKeyword' | 'undefinedKeyword' | 'callExpression'
      | 'noSubstitutionTemplateLiteral' | 'propertyAccessExpression' | 'arrowFunction' | 'numericLiteral'
      | 'spreadElement' | 'templateExpression' | 'prefixUnaryExpression';
  }

  export interface NumericLiteralInitializer extends Initializer {
    kindString: 'numericLiteral';
    text: string;
  }

  export interface StringLiteralInitializer extends Initializer {
    kindString: 'stringLiteral';
    text: string;
  }

  export interface NoSubstitutionTemplateLiteralInitializer extends Initializer {
    kindString: 'noSubstitutionTemplateLiteral';
    text: string;
  }

  export interface IdentifierInitializer extends Initializer {
    kindString: 'identifier';
    escapedText: string;
  }

  export interface ArrayLiteralExpressionInitializer extends Initializer {
    kindString: 'arrayLiteralExpression';
    elements: Initializer[];
  }

  export interface ObjectLiteralExpressionInitializer extends Initializer {
    kindString: 'objectLiteralExpression';
    properties: {
      [key: string]: Initializer;
    };
  }

  export interface PropertyAccessExpressionInitializer extends Initializer {
    kindString: 'propertyAccessExpression';
    expression: string;
    name: string;
  }

  export interface CallExpressionInitializer extends Initializer {
    kindString: 'callExpression';
    expression: string;
    typeArguments?: Type[];
    arguments?: Initializer[];
  }

  export interface NewExpressionInitializer extends Initializer {
    kindString: 'newExpression';
    expression: string;
    typeArguments?: Type[];
    arguments?: Initializer[];
  }

  export interface SpreadElementInitializer extends Initializer {
    kindString: 'spreadElement';
    expression: Initializer;
  }

  export interface PrefixUnaryExpressionInitializer extends Initializer {
    kindString: 'prefixUnaryExpression';
    operator?: string;
    operand?: Initializer;
  }

  // Interface declar

  export interface InterfaceDeclar extends Declar {
    kindString: 'interface';
    modifiers?: string[];
    name?: string;
    members?: Signature[];
  }

  export interface Signature {
    kind: ts.SyntaxKind;
    kindString?: 'property' | 'method' | 'index';
    jsDoc?: JsDoc[];
    isInternal?: boolean;
    modifiers?: string[];
    name?: string;
    typeParameters?: string[];
    parameters?: string[];
    type?: string;
    text?: string;
    signature?: string;
  }

  export interface SignatureParameter {
    name: string;
    type?: Type;
  }

//
//  export interface PropertySignature extends Signature {
//    kindString: 'property';
//    name: string;
//    modifiers?: Modifier[];
//    type?: Type;
//  }
//
//  export interface MethodSignature extends Signature {
//    kindString: 'method';
//    name: string;
//    modifiers?: Modifier[];
//    parameters?: SignatureParameter[];
//    type?: Type;
//  }
//
//  export interface IndexSignature extends Signature {
//    kindString: 'index';
//    parameters?: SignatureParameter[];
//    type?: Type;
//  }

  // Type alias declar

  export interface TypeAliasDeclar extends Declar {
    kindString: 'typeAlias';
    modifiers?: string[];
    name?: string;
    typeParameters?: string[];
    type?: string;
    text?: string;
  }

  // NgMeta

  export type NgType = 'Component' | 'Directive' | 'Pipe' | 'NgModule' | 'Injectable';

  export interface NgMeta {
    type: NgType;
  }

  export interface NgDirectiveMeta extends NgMeta {
    type: 'Directive';
    decorator: NgDirectiveDecorator;
  }

  export interface NgDirectiveDecorator {
    selector?: string;
    exportAs?: string;
  }

  export interface NgComponentMeta extends NgMeta {
    type: 'Component';
    decorator: NgComponentDecorator;
  }

  export interface NgComponentDecorator extends NgDirectiveDecorator {
    selector?: string;
    exportAs?: string;
  }

  export interface NgInjectableMeta extends NgMeta {
    type: 'Injectable';
    decorator: {
      providedIn?: string;
    };
  }

  export interface NgModuleMeta extends NgMeta {
    type: 'NgModule';
    decorator: {
      exports?: string;
      providers?: string;
    };
  }
}
