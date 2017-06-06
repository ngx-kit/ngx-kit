import { ElementDef, RegistrationDef } from '@ngx-kit/styler';

export interface KitFormLabelStyle {
  getStyles(): KitFormLabelStyleSet;
}

export interface KitFormLabelStyleSet extends RegistrationDef {
  host: ElementDef;
}
