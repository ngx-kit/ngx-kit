export type KitMainColor =
    'brand'
    | 'brandInverse'
    | 'bg'
    | 'bgInverse'
    | 'link'
    | 'primary'
    | 'important'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'disabled'
    | 'added'
    | 'removed';

export type KitTypoHeaders = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type KitThemeComponents = {componentId: string, modifiers: any}[];

export interface KitThemeProps {
  typo: {
    bodyFontSize: string;
    primaryFontSize: string;
    secondaryFontSize: string;
    headers: {
        [P in KitTypoHeaders]: string;
        }
  };
  colors: {
      [P in KitMainColor]: string;
      };
}

export interface KitThemeService {
  name: string;
  props: KitThemeProps;
  components: KitThemeComponents;
}
