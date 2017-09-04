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
  module: string;
  inputs: ComponentApiInput[];
  outputs: ComponentApiOutput[];
  selector: string;
  doc: string;
  type: 'Component' | 'Directive';
}

export interface ComponentApiInput {
  default: any;
  doc: string;
  name: string;
  type: any;
}

export interface ComponentApiOutput {
  doc: string;
  name: string;
  type: any;
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
