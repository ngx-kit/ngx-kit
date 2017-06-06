import { ElementDef, RegistrationDef } from '@ngx-kit/styler';

export interface KitFormGroupStyle {
  getStyles(): KitFormGroupStyleSet;
}

export interface KitFormGroupStyleSet extends RegistrationDef {
  host: ElementDef;
}
