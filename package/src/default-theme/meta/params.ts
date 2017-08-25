export interface ColorsSet {
  background: string;
  border: string;
  text: string;
}

export interface TypoColorsSet {
  background: string;
  text: string;
}

export interface Swatch {
  base: string;
  invert: string;
}

export type DefaultColors = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export interface KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders;
  colors: KitDefaultThemeParamsColors;
  grid: KitDefaultThemeParamsGrid;
  shadows: KitDefaultThemeParamsShadows;
  transitions: KitDefaultThemeParamsTransitions;
}

export interface KitDefaultThemeParamsColors {
  background: string;
  border: string;
  input: string,
  invert: string;
  swatches: {[key in DefaultColors]: Swatch};
}

export interface KitDefaultThemeParamsBorders {
  radius: number;
  width: number;
}

export interface KitDefaultThemeParamsGrid {
  h: number;
  v: number;
}

export interface KitDefaultThemeParamsShadows {
  deep: string;
  element: string;
  overlay: string;
}

export interface KitDefaultThemeParamsTransitions {
  'default': string;
}

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]>; };
export type KitDefaultThemeParamsDef = DeepPartial<KitDefaultThemeParams>;
