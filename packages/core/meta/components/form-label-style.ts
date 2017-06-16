import { ElementDef, RegistrationDef } from '@ngx-kit/styler';

export interface KitFormLabelStyle {
  getStyles(): KitFormLabelStyleDef;
}

export interface KitFormLabelStyleDef extends RegistrationDef {
  host: ElementDef;
}
