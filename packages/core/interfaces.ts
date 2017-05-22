import { StylerService } from '@ngx-kit/styler';

export interface KitThemeService {
  style(component: string, styler: StylerService): void;
}