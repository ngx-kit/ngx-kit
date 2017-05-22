export interface KitDefaultThemeParams {
  grid: {
    v: number;
    h: number;
  };
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
  shadows: {
    element: string;
    deep: string;
  }
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