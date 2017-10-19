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
  KitGridControlActionType,
} from '../meta';
import { KitGridControlDirective } from './kit-grid-control.directive';

@Injectable()
export class KitGridControlService implements OnChanges {
  grid: KitGridControlDirective;

  private _action = new Subject<KitGridControlActionType>();

  constructor(private renderer: Renderer2) {
  }

  get action(): Observable<KitGridControlActionType> {
    return this._action.asObservable();
  }

  ngOnChanges() {
  }

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
        this._action.next(altTypes[event.keyCode]);
      } else if (types[event.keyCode]) {
        event.preventDefault();
        this._action.next(types[event.keyCode]);
      }
    });
  }
}
