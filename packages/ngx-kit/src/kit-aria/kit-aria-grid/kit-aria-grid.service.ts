import { Injectable, OnChanges, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyEnd,
  keyHome,
  keyPageDown,
  keyPageUp,
  KitAriaMove,
  KitAriaMoveType,
} from '../meta';
import { KitAriaGridCellDirective } from './kit-aria-grid-cell.directive';
import { KitAriaGridDirective } from './kit-aria-grid.directive';

@Injectable()
export class KitAriaGridService implements OnChanges {
  grid: KitAriaGridDirective;

  private _move = new Subject<KitAriaMove>();

  private cells = new Map<string, KitAriaGridCellDirective>();

  private current: [number, number] = [0, 0];

  constructor(private renderer: Renderer2) {
  }

  get move(): Observable<KitAriaMove> {
    return this._move.asObservable();
  }

  ngOnChanges() {
  }

  focus(pos?: [number, number], force = false): boolean {
    const curr = pos || this.current;
    const cell = this.cells.get(this.compileId(curr));
    if (cell) {
      this.current = curr;
      cell.focus();
      return true;
    } else {
      if (force) {
        this.current = curr;
      }
      return false;
    }
  }

  register(pos: [number, number], cell: KitAriaGridCellDirective) {
    this.cells.set(this.compileId(pos), cell);
    return pos[0] === this.current[0] && pos[1] === this.current[1];
  }

  registerGrid(grid: KitAriaGridDirective) {
    this.grid = grid;
    const el = this.grid.nativeEl;
    this.renderer.listen(el, 'keydown', (event: KeyboardEvent) => {
      const types = {
        [keyArrowUp]: KitAriaMoveType.prevRow,
        [keyArrowRight]: KitAriaMoveType.nextCell,
        [keyArrowDown]: KitAriaMoveType.nextRow,
        [keyArrowLeft]: KitAriaMoveType.prevCell,
        [keyHome]: KitAriaMoveType.home,
        [keyEnd]: KitAriaMoveType.end,
        [keyPageUp]: KitAriaMoveType.prevPage,
        [keyPageDown]: KitAriaMoveType.nextPage,
      };
      if (types[event.keyCode]) {
        event.preventDefault();
        this._move.next({
          type: types[event.keyCode],
          position: this.current,
        });
      }
    });
  }

  remove(pos: [number, number]) {
    this.cells.delete(this.compileId(pos));
  }

  private compileId(pos: [number, number]) {
    return `${pos[0]}-${pos[1]}`;
  }
}
