import { deepExtend } from './deep-extend';

export abstract class KitComponentService<T> {

  protected theme: T;
  protected modifiers: T[] = [];

  getTheme(): T {
    // Merge base theme with components
    return this.modifiers.reduce((prev, curr) => deepExtend(prev, curr), this.theme);
  }

  modify(modifier: T) {
    this.modifiers.push(modifier);
  }

}
