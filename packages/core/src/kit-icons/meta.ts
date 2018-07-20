import { BehaviorSubject } from 'rxjs';

export interface KitIcon {
  name: string;
  url?: string;
  xml?: string;
  size?: string;
}

export interface KitIconSource {
  svg: string;
  size?: string;
}

export interface KitIconCached {
  name: string;
  svg: BehaviorSubject<string | null>;
}
