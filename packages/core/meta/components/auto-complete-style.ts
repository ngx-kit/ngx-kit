import { ElementDef, RegistrationDef } from '@ngx-kit/styler';

export interface KitAutoCompleteStyle {
  getStyles(): KitAutoCompleteStyleDef;
}

export interface KitAutoCompleteStyleDef extends RegistrationDef {
  host: ElementDef;
}
