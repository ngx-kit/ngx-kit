import { Injectable, OnChanges, Renderer2 } from '@angular/core';
import { keyAlt, keyCtrl, keyShift } from '../kit-event-manager/meta';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitKeymapDirective } from './kit-keymap.directive';
import { KitKeymapActions, KitKeymapAction } from './meta';

/**
 * Listens keyboard events and emit actions depends on mapping.
 *
 * Should be provided on component or directive.
 */
@Injectable()
export class KitKeymapService implements OnChanges {
  private _actions = new Subject<any>();

  private grid: KitKeymapDirective;

  constructor(private renderer: Renderer2,
              private mapping: KitKeymapActions) {
  }

  /**
   * Get `Observable` with captured actions.
   *
   * @publicApi
   */
  get actions(): Observable<any> {
    return this._actions.asObservable();
  }

  ngOnChanges() {
  }

  /**
   * `KitKeymapDirective` automatically registrates via this method.
   *
   * @publicApi
   */
  register(grid: KitKeymapDirective) {
    this.grid = grid;
    const el = this.grid.nativeEl;
    if (this.mapping.keydown().length > 0) {
      const map: KitKeymapAction[] = this.mapping.keydown();
      this.renderer.listen(el, 'keydown', (event: KeyboardEvent) => {
        let action: any = null;
        let actionPriority = 0;
        map.forEach(m => {
          if (event.keyCode === m.key) {
            let priority = 1;
            let fit = true;
            if (m.meta) {
              if (m.meta.ctrl) {
                if (event.ctrlKey) {
                  priority++
                } else {
                  fit = false;
                }
              }
              if (m.meta.alt) {
                if (event.altKey) {
                  priority++
                } else {
                  fit = false;
                }
              }
              if (m.meta.shift) {
                if (event.shiftKey) {
                  priority++
                } else {
                  fit = false;
                }
              }
            }
            if (fit && priority > actionPriority) {
              event.preventDefault();
              action = m.action;
              actionPriority = priority;
            }
          }
        });
        if (action) {
          event.preventDefault();
          this._actions.next(action);
        }
      });
    }
  }

  private isMeta(code: number): boolean {
    return code === keyShift || code === keyCtrl || code === keyAlt;
  }
}
