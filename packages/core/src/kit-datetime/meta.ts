export interface KitDatePickerGridItem {
  active: boolean;
  date: Date;
  focus: boolean;
  outside: boolean;
}

export type KitDatePickerGrid = KitDatePickerGridItem[][];

export enum KitDatePickerKeymap {
  noop, // omit 0 value
  nextDay,
  prevDay,
  nextWeek,
  prevWeek,
  lastDayOfMonth,
  firstDayOfMonth,
  nextMonth,
  prevMonth,
  nextYear,
  prevYear,
  pick,
}
