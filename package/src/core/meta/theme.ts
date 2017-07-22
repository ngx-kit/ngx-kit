export interface KitThemeService {
  overlayCloseAnimationTimings: string;
  overlayOpenAnimationTimings: string;
  getColor(name: string): KitThemeColor;
}

export interface KitThemeColor {
  name: string;
  background: string;
  border: string;
  text: string;
}
