export interface ContentComponent {
  code: {
    file: string;
    language: string;
    content: string;
  }[];
  meta: {
    title: string;
  };
  readme: string;
}

export interface ContentComponents {
  [key: string]: ContentComponent;
}

export interface ContentApi {
  Date;
  files: ComponentApi[];
  version: string;
}

export interface ComponentApi {
  class: string;
  doc: ComponentApiDoc;
  getProps: ComponentApiProp[];
  inputs: ComponentApiInput[];
  methods: ComponentApiMethod[];
  module: string;
  outputs: ComponentApiOutput[];
  props: ComponentApiProp[];
  setProps: ComponentApiMethod[];
  string;
  type: 'Component' | 'Directive' | 'Injectable';
}

export interface ComponentApiInput {
  default: any;
  doc: ComponentApiDoc;
  name: string;
  type: any;
}

export interface ComponentApiOutput {
  doc: ComponentApiDoc;
  name: string;
  type: any;
}

export interface ComponentApiProp {
  doc: ComponentApiDoc;
  name: string;
  type: any;
}

export interface ComponentApiMethod {
  doc: ComponentApiDoc;
  name: string;
  params: {
    name: string;
    type: any;
  }[];
  type: any;
  typeParameters: string[];
}

export interface ComponentApiDoc {
  comment: string;
  tags: {
    name: string;
    value: string;
  }[];
}

export interface ContentPost {
  content: string;
  meta: {
    title: string;
  };
}

export interface ContentPosts {
  [key: string]: ContentPost;
}

export type Content = ContentFile[];

export interface ContentFile {
  meta: any;
}
