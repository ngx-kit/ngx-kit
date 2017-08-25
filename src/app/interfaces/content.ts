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
