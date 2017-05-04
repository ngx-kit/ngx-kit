export type KitButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type KitButtonType = 'default' | 'success' | 'info' | 'warning' | 'error' | 'link';

export interface KitButtonTheme {
  host?: {
    base?: {
      [index: string]: string | number | null;
    };
    size?: {
      [P in KitButtonSize]?: {
        [index: string]: string | number | null;
      };
    };
    type?: {
      [P in KitButtonType]?: {
        [index: string]: string | number | null;
      };
    };
    disabled?: {
      [index: string]: string | number | null;
    };
  };
}
