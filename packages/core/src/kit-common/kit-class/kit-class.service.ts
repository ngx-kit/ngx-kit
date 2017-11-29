import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { isArray } from '../../util/is-array';
import { isObject } from '../../util/is-object';
import { isString } from '../../util/is-string';
import { KitClassSetter } from '../meta';

/**
 * Apply to classes to an element.
 *
 * Must be provided on a component or directive.
 *
 * ```typescript
 * classService.apply({color: 'red', active: true});
 * ```
 *
 * Adds to element: `class="color-red active"`
 */
@Injectable()
export class KitClassService {
  private _state: KitClassSetter = {};

  private classes = new Set<string>();

  private stateSize = 0;

  constructor(private renderer: Renderer2,
              private el: ElementRef) {
  }

  /**
   * Override class declaration state.
   */
  set state(setterRaw: KitClassSetter) {
    const setter = setterRaw || {};
    if (this.isChanged(setter)) {
      this._state = {...setter};
      this.update(this._state);
    }
  }

  /**
   * Merge to class declaration state.
   */
  apply(setter: KitClassSetter): void {
    const newState = {...this._state, ...setter};
    if (this.isChanged(newState)) {
      this._state = newState;
      this.update(this._state);
    }
  }

  private isChanged(newState: KitClassSetter): boolean {
    if (Object.keys(newState).length === this.stateSize) {
      for (const name in newState) {
        if (newState[name] !== this._state[name]) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
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

  private render(classes: Set<string>) {
    this.classes.forEach(c => {
      if (!classes.has(c)) {
        this.renderer.removeClass(this.el.nativeElement, c);
      }
    });
    classes.forEach(c => {
      this.renderer.addClass(this.el.nativeElement, c);
    });
    this.classes = classes;
  }

  private update(state: any) {
    const classes = new Set<string>();
    if (isString(state)) {
      classes.add(state);
    } else if (isArray(state)) {
      state.forEach((v: string | any) => {
        if (isString(v)) {
          classes.add(v);
        } else if (isObject(v)) {
          this.processObj(v).forEach(c => classes.add(c));
        } else {
          throw new Error(`[kitClass] item should be a string or an object`);
        }
      });
    } else if (isObject(state)) {
      this.processObj(state).forEach(c => classes.add(c));
    } else {
      throw new Error(`[kitClass] must be a string, array or object`);
    }
    this.render(classes);
  }
}
