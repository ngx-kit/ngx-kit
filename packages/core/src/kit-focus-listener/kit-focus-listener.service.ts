import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

/**
 * Handles focus/blur from a group of elements.
 *
 * If focus moves among elements in a defined group, blur event will not be fired.
 *
 *
 * ### Example
 *
 * In `ui-autocomplete` we heed to omit blur event, if user click on a suggestion.
 *
 * We provide `KitFocusListenerService` in the directive, register main input and `ui-autocomplete-options` element in
 * the service and subscribe on `blur` event.
 *
 * * collection:modal -
 * [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-autocomplete),
 * [demo](https://ngx-kit.com/collection/module/ui-autocomplete)
 */
@Injectable()
export class KitFocusListenerService {
  private _focused = false;

  private _focus = new Subject<any>();

  private _blur = new Subject<any>();

  private elements: {
    el: HTMLElement;
    focus: Function;
    blur: Function;
  }[] = [];

  constructor(private em: EventManager) {
  }

  /**
   * Emits, if user focuses one of registered element.
   */
  get focus(): Observable<any> {
    return this._focus.asObservable();
  }

  /**
   * Emits, if focus leave one of registered element and target node is not one of registered element (or it's child).
   */
  get blur(): Observable<any> {
    return this._blur.asObservable();
  }

  /**
   * Is one of registered element focused now.
   */
  get focused(): boolean {
    return this._focused;
  }

  add(el: HTMLElement) {
    this.elements.push({
      el: el,
      focus: this.em.addEventListener(el, 'focus', (event: any) => {
        if (!this._focused) {
          this._focused = true;
          this._focus.next(event);
        }
      }),
      blur: this.em.addEventListener(el, 'blur', (event: any) => {
        this.checkLeave(event);
      }),
    });
  }

  remove(el: HTMLElement) {
    const index = this.elements.findIndex(e => e.el === el);
    if (index) {
      const element = this.elements[index];
      if (element) {
        // void handlers
        element.focus();
        element.blur();
      }
      // remove from stack
      this.elements.splice(index, 1);
    } else {
      throw new Error('Element has not been registered in KitFocusListenerService');
    }
  }

  private checkLeave(event?: any) {
    let leave = true;
    const relatedTarget = event.relatedTarget || event.explicitOriginalTarget || document.activeElement;
    this.elements.forEach(el => {
      if (el.el && el.el.contains(relatedTarget)) {
        leave = false;
      }
    });
    if (leave) {
      this._focused = false;
      this._blur.next(event);
    }
  }
}
