export interface KitIcon {
  name: string;
  url: string;
  size?: string;
}

export interface KitIconNode {
  svg: SVGElement;
  size?: string;
}

export interface KitIconCached {
  name: string;
  svg: SVGElement;
}
