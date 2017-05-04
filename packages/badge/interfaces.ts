export type KitBadgeSize = 's' | 'm' | 'l';

export type KitBadgeType = 'default' | 'primary' | 'important' | 'added' | 'removed';

export interface KitBadgeTheme {
  host: {
    base: {
      [index: string]: string | number | null;
    };
    size: {
      [P in KitBadgeSize]: {
        [index: string]: string | number | null;
      };
    };
    type: {
      [P in KitBadgeType]: {
        [index: string]: string | number | null;
      };
    };
  };
}
