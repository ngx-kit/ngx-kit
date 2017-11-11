export interface ContentApi {
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
  selector: string;
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
