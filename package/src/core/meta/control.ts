export interface KitControl<T> {
  state: T;
  updateValue(value: T): void;
}
