export type Content = ContentFile[];

export interface ContentFile {
  file: string;
  meta: {
    route: string;
    id: string;
    title: string;
  },
  body: string;
}
