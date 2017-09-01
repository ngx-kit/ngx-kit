import { ComponentStyle, StylerComponent } from '@ngx-kit/styler';

export interface KitComponent {
  readonly styler: StylerComponent;
}

export interface KitComponentStyle extends ComponentStyle {
}
