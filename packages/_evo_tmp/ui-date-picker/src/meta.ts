export interface UiDatePickerGridItem {
  active: boolean;
  date: Date;
  focus: boolean;
  outside: boolean;
}

export type UiDatePickerGrid = UiDatePickerGridItem[][];
