export type Content = ContentFile[];

export interface ContentFile {
  body: string;
  file: string;
  meta: {
    route: string;
    id: string;
    title: string;
  },
}
