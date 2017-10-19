import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitGridControlService } from '../kit-aria/kit-grid-control/kit-grid-control.service';
import { KitGridControlActionType } from '../kit-aria/meta';
import { KitDatePickerGrid } from './meta';

@Injectable()
export class KitDatePickerService {
  private _active: Date;

  private _focus: Date;

  private readonly _grid$ = new BehaviorSubject<KitDatePickerGrid>([]);

  private readonly _monthCursor$ = new BehaviorSubject<Date>(new Date());

  private readonly _pick = new Subject<Date>();

  constructor(@Optional() private ariaGrid: KitGridControlService) {
    if (this.ariaGrid) {
      this.handleMove();
    }
  }

  set active(date: Date) {
    this._active = new Date(date);
    this._focus = new Date(date);
    this.updateGrid();
  }

  get grid$(): Observable<KitDatePickerGrid> {
    return this._grid$.asObservable();
  }

  get monthCursor$(): Observable<Date> {
    return this._monthCursor$.asObservable();
  }

  get pick(): Observable<Date> {
    return this._pick.asObservable();
  }

  get weekdays(): Date[] {
    const weekdays = [];
    const cursor = this.startOfWeek(new Date());
    for (let i = 0; i < 7; i++) {
      weekdays.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    return weekdays;
  }

  focus(date: Date) {
    this._focus = new Date(date);
    this.updateGrid();
  }

  isDatesEqual(x: Date, y: Date): boolean {
    if (x && y) {
      // @todo improve performance: cache xp, yp
      const xp = new Date(x);
      xp.setHours(0, 0, 0, 0);
      const yp = new Date(y);
      yp.setHours(0, 0, 0, 0);
      return +xp === +yp;
    } else {
      throw new Error('isDatesEqual params error');
    }
  }

  modMonth(modifier: 1 | -1) {
    this._focus.setMonth(this._focus.getMonth() + modifier);
    this.updateGrid();
  }

  modYear(modifier: 1 | -1) {
    this._focus.setFullYear(this._focus.getFullYear() + modifier);
    this.updateGrid();
  }

  registerAriaGrid(ariaGrid: KitGridControlService) {
    this.ariaGrid = ariaGrid;
  }

  private getDatePosInGrid(date: Date) {
    let pos = null;
    this._grid$.value.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (this.isDatesEqual(col.date, date)) {
          pos = [rowIndex, colIndex];
        }
      });
    });
    return pos;
  }

  private handleMove() {
    this.ariaGrid.action.subscribe((type: KitGridControlActionType) => {
      switch (type) {
        case KitGridControlActionType.prevRow:
          this._focus.setDate(this._focus.getDate() - 7);
          this.updateGrid();
          break;
        case KitGridControlActionType.nextCell:
          this._focus.setDate(this._focus.getDate() + 1);
          this.updateGrid();
          break;
        case KitGridControlActionType.nextRow:
          this._focus.setDate(this._focus.getDate() + 7);
          this.updateGrid();
          break;
        case KitGridControlActionType.prevCell:
          this._focus.setDate(this._focus.getDate() - 1);
          this.updateGrid();
          break;
        case KitGridControlActionType.end:
          this._focus.setMonth(this._focus.getMonth() + 1, 0);
          this.updateGrid();
          break;
        case KitGridControlActionType.home:
          this._focus.setDate(1);
          this.updateGrid();
          break;
        case KitGridControlActionType.prevPage:
          this.modMonth(-1);
          break;
        case KitGridControlActionType.nextPage:
          this.modMonth(1);
          break;
        case KitGridControlActionType.prevSet:
          this.modYear(-1);
          break;
        case KitGridControlActionType.nextSet:
          this.modYear(1);
          break;
        case KitGridControlActionType.enter:
          this._pick.next(new Date(this._focus));
          break;
      }
    });
  }

  private startOfMonth(curr: Date) {
    return new Date(curr.getFullYear(), curr.getMonth(), 1);
  }

  private startOfWeek(curr: Date) {
    const date = new Date(curr);
    const day = date.getDay() || 7;
    if (day !== 1) {
      date.setHours(-24 * (day - 1));
    }
    return date;
  }

  private updateGrid() {
    if (this._monthCursor$.value &&
        this.isDatesEqual(this.startOfMonth(this._focus), this.startOfMonth(this._monthCursor$.value))) {
      // update current grid
      const grid = this._grid$.value;
      grid.forEach(r => r.forEach(c => {
        c.active = this.isDatesEqual(c.date, this._active);
        c.focus = this.isDatesEqual(c.date, this._focus);
      }));
      this._grid$.next(grid);
    } else {
      // recompile grid
      const month = this.startOfMonth(this._focus);
      const grid = [];
      const cursor = this.startOfWeek(month);
      for (let row = 0; row < this.weeksInMonth(month); row++) {
        const line = [];
        for (let col = 0; col < 7; col++) {
          const date = new Date(cursor);
          line.push({
            active: this.isDatesEqual(date, this._active),
            date,
            focus: this.isDatesEqual(date, this._focus),
            outside: date.getMonth() !== month.getMonth(),
          });
          cursor.setDate(cursor.getDate() + 1);
        }
        grid.push(line);
      }
      this._monthCursor$.next(month);
      this._grid$.next(grid);
    }
  }

  private weeksInMonth(curr: Date) {
    const firstOfMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
    let day = firstOfMonth.getDay() || 6;
    day = day === 1 ? 0 : day;
    if (day) {
      day--;
    }
    let diff = 7 - day;
    const lastOfMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
    const lastDate = lastOfMonth.getDate();
    if (lastOfMonth.getDay() === 1) {
      diff--;
    }
    return Math.ceil((lastDate - diff) / 7) + 1;
  }
}
