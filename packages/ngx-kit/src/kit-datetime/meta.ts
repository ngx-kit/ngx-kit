export interface KitDatePickerGridItem {
  active: boolean;
  date: Date;
  focus: boolean;
  outside: boolean;
}

export type KitDatePickerGrid = KitDatePickerGridItem[][];
