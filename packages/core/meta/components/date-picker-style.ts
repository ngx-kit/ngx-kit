import { ElementDef, RegistrationDef, StateDef } from '@ngx-kit/styler';

export interface KitDatePickerStyle {
  getStyles(): KitDatePickerStyleSet;
}

export interface KitDatePickerStyleSet extends RegistrationDef {
  host: ElementDef;
  years: ElementDef;
  year: KitDatePickerStyleSetYear;
  months: ElementDef;
  month: KitDatePickerStyleSetElement;
  weekdays: ElementDef;
  weekday: ElementDef;
  dates: ElementDef;
  date: KitDatePickerStyleSetDate;
}

export interface KitDatePickerStyleSetYear extends ElementDef {
  $states: {
    type: StateDef;
  };
}

export interface KitDatePickerStyleSetElement extends ElementDef {
  $states: {
    type: StateDef;
  };
}

export interface KitDatePickerStyleSetDate extends ElementDef {
  $states: {
    outside: StateDef;
    active: StateDef;
  };
}
