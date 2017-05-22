export interface KitDefaultThemeParams {
  grid: {
    v: number,
    h: number,
  },
  colors: {
    body: KitDefaultThemeColor;
    brand: KitDefaultThemeColor;
    link: KitDefaultThemeColor;
    button: KitDefaultThemeColor;
    border: KitDefaultThemeColor;
    success: KitDefaultThemeColor;
    warning: KitDefaultThemeColor;
    error: KitDefaultThemeColor;
  }
}

export interface KitDefaultThemeColor {
  color: string;
  text: string;
}