import { StylerComponent } from '@ngx-kit/styler';

export interface KitThemeService {
  style(name: string, component: StylerComponent): void;
}