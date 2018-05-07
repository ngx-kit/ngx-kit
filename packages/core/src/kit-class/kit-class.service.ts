import { ElementRef, Injectable, IterableChanges, IterableDiffer, IterableDiffers, Renderer2, } from '@angular/core';
import { isString } from '../util/is-string';
import { KitClassSetter } from './meta';

/**
 * Apply classes to an element.
 *
 * Must be provided on a component or directive.
 *
 * ```typescript
 * constructor(private kitClass: KitClassService) {}
 * ...
 * this.kitClass.apply({color: 'red', active: true, primary: false});
 * ```
 *
 * Adds to element: `class="color-red active"`
 */
@Injectable()
export class KitClassService {
  private _state: KitClassSetter = {};

  private _differ: IterableDiffer<string>;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private differs: IterableDiffers,
  ) {
  }

  /**
   * Override class declaration state.
   */
  set state(setterRaw: KitClassSetter) {
    const newState = {...setterRaw};
    this.process(newState);
  }

  /**
   * Merge to class declaration state.
   */
  apply(setter: KitClassSetter): void {
    const newState = {...this._state, ...setter};
    this.process(newState);
  }

  private process(newState: KitClassSetter) {
    const classList = this.processObj(newState);
    if (!this._differ) {
      this._differ = this.differs.find(classList).create();
    }
    const changes = this._differ.diff(classList);
    if (changes) {
      this.applyChanges(changes);
      this._state = newState;
    }
  }

  private applyChanges(changes: IterableChanges<string>) {
    changes.forEachRemovedItem((record) => this.renderer.removeClass(this.el.nativeElement, record.item));
    changes.forEachAddedItem((record) => this.renderer.addClass(this.el.nativeElement, record.item));
  }

  private processObj(obj: any): string[] {
    return Object.keys(obj)
      .map((key: string) => {
        const value = obj[key];
        return isString(value)
          ? `${key}-${value}`
          : !!value
            ? key
            : null;
      })
      .filter(isString);
  }
}
