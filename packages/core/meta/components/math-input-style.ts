import { ElementDef, RegistrationDef } from '@ngx-kit/styler';

export interface KitMathInputStyle {
  getStyles(): KitMathInputStyleDef;
}

export interface KitMathInputStyleDef extends RegistrationDef {
  host: ElementDef;
  result: ElementDef;
}
