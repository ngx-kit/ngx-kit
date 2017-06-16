import { ElementDef, RegistrationDef, StateDef } from '@ngx-kit/styler';

export interface KitDatePickerStyle {
  getStyles(): KitDatePickerStyleDef;
}

export interface KitDatePickerStyleDef extends RegistrationDef {
  host: ElementDef;
  years: ElementDef;
  year: KitDatePickerStyleDefYear;
  months: ElementDef;
  month: KitDatePickerStyleDefElement;
  weekdays: ElementDef;
  weekday: ElementDef;
  dates: ElementDef;
  date: KitDatePickerStyleDefDate;
}

export interface KitDatePickerStyleDefYear extends ElementDef {
  $states: {
    type: StateDef;
  };
}

export interface KitDatePickerStyleDefElement extends ElementDef {
  $states: {
    type: StateDef;
  };
}

export interface KitDatePickerStyleDefDate extends ElementDef {
  $states: {
    outside: StateDef;
    active: StateDef;
  };
}
