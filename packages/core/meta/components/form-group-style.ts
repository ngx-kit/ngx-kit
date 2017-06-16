import { ElementDef, RegistrationDef } from '@ngx-kit/styler';

export interface KitFormGroupStyle {
  getStyles(): KitFormGroupStyleDef;
}

export interface KitFormGroupStyleDef extends RegistrationDef {
  host: ElementDef;
}
