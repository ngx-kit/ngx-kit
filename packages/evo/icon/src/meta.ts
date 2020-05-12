import { BehaviorSubject } from 'rxjs';

export interface EvoIcon {
  name: string;
  url?: string;
  xml?: string;
  size?: string;
}

export interface EvoIconSource {
  svg: string;
  size?: string;
}

export interface EvoIconCached {
  name: string;
  svg: BehaviorSubject<string | null>;
}
