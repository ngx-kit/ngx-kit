import * as ts from 'typescript';

export interface GenArgs {
  project: string;
  output: string;
  config?: string;
}

export interface GenConfig {
  addFileText?: boolean;
  addKindText?: boolean;
}

export const genDefaultConfig: GenConfig = {
  addFileText: true,
  addKindText: true,
};

export const angularLifehooks = [
  'ngOnInit',
  'ngDoCheck',
  'ngOnChanges',
  'ngOnDestroy',
  'ngAfterContentInit',
  'ngAfterContentChecked',
  'ngAfterViewInit',
  'ngAfterContentChecked',
];

export const angularPropDecorators = [
  '@HostListener',
  '@HostBinding',
  '@ContentChildren',
  '@ContentChild',
  '@ViewChildren',
  '@ViewChild',
];

export namespace DocGen {
  export interface Doc {
    files: File[];
    filesMap: any;
  }

  export interface File {
    fileName: string;
    type: string;
    text?: string;
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
    kindString: 'export' | 'class' | 'interface' | 'typeAlias' | 'function';
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

  export interface ClassDeclar extends Declar {
    kindString: 'class';
    isDemo?: boolean;
    decorators?: string[];
    modifiers?: string[];
    name?: string;
    members?: ClassMember[];
    ngMeta?: NgMeta;
  }

  export interface ClassMember {
    kind: ts.SyntaxKind;
    kindString?: 'property' | 'constructor' | 'method' | 'getter' | 'setter';
    name?: string;
    jsDoc?: JsDoc[];
    isInternal?: boolean;
    decorators?: string[];
    modifiers?: string[];
    parameters?: string[];
    type?: string;
    initializer?: string;
    signature?: string;
    text?: string;
  }

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
    optional?: boolean;
    text?: string;
    signature?: string;
  }

  export interface TypeAliasDeclar extends Declar {
    kindString: 'typeAlias';
    modifiers?: string[];
    name?: string;
    typeParameters?: string[];
    type?: string;
    text?: string;
  }

  export interface FunctionDeclar extends Declar {
    kindString: 'function';
    decorators?: string[];
    modifiers?: string[];
    name?: string;
    parameters?: string[];
    type?: string;
    signature?: string;
  }

  // NgMeta

  export type NgType = 'Component' | 'Directive' | 'Pipe' | 'NgModule' | 'Injectable';

  export interface NgMeta {
    type: NgType;
    decorator?: {
      selector?: string;
      exportAs?: string;
      providedIn?: string;
      exports?: string;
      providers?: string;
    };
  }
}
