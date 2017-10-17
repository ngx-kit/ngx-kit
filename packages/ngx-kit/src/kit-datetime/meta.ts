export interface KitDatePickerGridItem {
  date: Date;
  isOutside: boolean;
  pos: [number, number];
}

export type KitDatePickerGrid = KitDatePickerGridItem[][];
