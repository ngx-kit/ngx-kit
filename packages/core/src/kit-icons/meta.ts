import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface KitIcon {
  name: string;
  url: string;
  size?: string;
}

export interface KitIconSource {
  svg: string;
  size?: string;
}

export interface KitIconCached {
  name: string;
  svg: BehaviorSubject<string|null>;
}
