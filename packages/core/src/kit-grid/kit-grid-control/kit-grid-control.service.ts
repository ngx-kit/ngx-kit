import { Injectable, OnChanges, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyEnd,
  keyEnter,
  keyHome,
  keyPageDown,
  keyPageUp,
  keySpace,
} from '../../kit-core/meta';
import { KitGridControlActionType } from '../meta';
import { KitGridControlDirective } from './kit-grid-control.directive';

/**
 * Listens keyboard events and emit actions for grid controlling (navigations event, etc).
 *
 * Actions:
 * * Arrow Up - `prevRow`
 * * Arrow Right - `nextCell`
 * * Arrow Down - `nextRow`
 * * Arrow Left - `prevCell`
 * * Home - `home`
 * * End - `end`
 * * Page Up - `prevPage`
 * * Page Down - `nextPage`
 * * Enter - `enter`
 * * Space - `enter`
 * * Ctrl + Page Up - `prevSet`
 * * Ctrl + Page Down - `nextSet`
 */
@Injectable()
export class KitGridControlService implements OnChanges {
  private _actions = new Subject<KitGridControlActionType>();

  private grid: KitGridControlDirective;

  constructor(private renderer: Renderer2) {
  }

  /**
   * Get `Observable` with captured actions.
   *
   * @publicApi
   */
  get actions(): Observable<KitGridControlActionType> {
    return this._actions.asObservable();
  }

  ngOnChanges() {
  }

  /**
   * `kitGridControl` automatically register via this method.
   *
   * @publicApi
   */
  registerGrid(grid: KitGridControlDirective) {
    this.grid = grid;
    const el = this.grid.nativeEl;
    this.renderer.listen(el, 'keydown', (event: KeyboardEvent) => {
      const types = {
        [keyArrowUp]: KitGridControlActionType.prevRow,
        [keyArrowRight]: KitGridControlActionType.nextCell,
        [keyArrowDown]: KitGridControlActionType.nextRow,
        [keyArrowLeft]: KitGridControlActionType.prevCell,
        [keyHome]: KitGridControlActionType.home,
        [keyEnd]: KitGridControlActionType.end,
        [keyPageUp]: KitGridControlActionType.prevPage,
        [keyPageDown]: KitGridControlActionType.nextPage,
        [keyEnter]: KitGridControlActionType.enter,
        [keySpace]: KitGridControlActionType.enter,
      };
      const altTypes = {
        [keyPageUp]: KitGridControlActionType.prevSet,
        [keyPageDown]: KitGridControlActionType.nextSet,
      };
      if (event.altKey && altTypes[event.keyCode]) {
        event.preventDefault();
        this._actions.next(altTypes[event.keyCode]);
      } else if (types[event.keyCode]) {
        event.preventDefault();
        this._actions.next(types[event.keyCode]);
      }
    });
  }
}
