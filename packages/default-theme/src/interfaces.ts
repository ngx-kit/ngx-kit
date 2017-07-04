export interface KitDefaultThemeParams {
  border: {
    width: number;
    radius: {
      s: number;
      m: number;
      l: number;
    };
  };
  colorMod: {
    type: 'shade' | 'tint' | 'lighten' | 'darken';
    ratio: number;
  }
  colors: {
    body: KitDefaultThemeColor;
    brand: KitDefaultThemeColor;
    link: KitDefaultThemeColor;
    button: KitDefaultThemeColor;
    border: KitDefaultThemeColor;
    success: KitDefaultThemeColor;
    warning: KitDefaultThemeColor;
    error: KitDefaultThemeColor;
  };
  grid: {
    v: number;
    h: number;
  };
  shadows: {
    element: string;
    deep: string;
    overlay: string;
  };
  transitions: {
    default: string;
  };
  typo: {
    bodyFontSize: string;
    primaryFontSize: string;
    secondaryFontSize: string;
    headers: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
}

export interface KitDefaultThemeColor {
  color: string;
  text: string;
}
