import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitAriaGridService } from '../kit-aria/kit-aria-grid/kit-aria-grid.service';
import { KitAriaMove, KitAriaMoveType } from '../kit-aria/meta';
import { KitDatePickerGrid } from './meta';

@Injectable()
export class KitDatePickerService {
  private readonly _grid$ = new BehaviorSubject<KitDatePickerGrid>([]);

  private readonly _monthCursor$ = new BehaviorSubject<Date>(new Date());

  constructor(@Optional() private ariaGrid: KitAriaGridService) {
    if (this.ariaGrid) {
      this.handleMove();
    }
  }

  get grid$(): Observable<KitDatePickerGrid> {
    return this._grid$.asObservable();
  }

  get monthCursor$(): Observable<Date> {
    return this._monthCursor$.asObservable();
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

  focus(pos: [number, number]) {
    this.ariaGrid.focus(pos);
  }

  init(date: any) {
    this.initGrid();
    this._monthCursor$.next(this.startOfMonth(date));
  }

  isDatesEqual(x: Date, y: Date): boolean {
    return x.toDateString() === y.toDateString();
  }

  modMonth(modifier: 1 | -1) {
    const newState = new Date(this._monthCursor$.value);
    newState.setMonth(newState.getMonth() + modifier);
    this._monthCursor$.next(newState);
  }

  modYear(modifier: 1 | -1) {
    const newState = new Date(this._monthCursor$.value);
    newState.setFullYear(newState.getFullYear() + modifier);
    this._monthCursor$.next(newState);
  }

  registerAriaGrid(ariaGrid: KitAriaGridService) {
    this.ariaGrid = ariaGrid;
  }

  private ariaChangeMonth(date: Date, mod: 1 | -1) {
    this.modMonth(mod);
    const pos = this.getDatePosInGrid(date);
    if (pos) {
      this.ariaGrid.focus(pos, true);
    } else {
      throw new Error('Month changing error!');
    }
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
    if (!pos) {
      throw new Error('Date is not in the grid!');
    }
    return pos;
  }

  private handleMove() {
    this.ariaGrid.move.subscribe((move: KitAriaMove) => {
      const date = new Date(this._grid$.value[move.position[0]][move.position[1]].date);
      switch (move.type) {
        case KitAriaMoveType.prevRow:
          date.setDate(date.getDate() - 7);
          if (date.getMonth() === this._monthCursor$.value.getMonth()) {
            this.ariaGrid.focus(this.getDatePosInGrid(date));
          } else {
            this.ariaChangeMonth(date, -1);
          }
          break;
        case KitAriaMoveType.nextCell:
          date.setDate(date.getDate() + 1);
          if (date.getMonth() === this._monthCursor$.value.getMonth()) {
            this.ariaGrid.focus(this.getDatePosInGrid(date));
          } else {
            this.ariaChangeMonth(date, 1);
          }
          break;
        case KitAriaMoveType.nextRow:
          date.setDate(date.getDate() + 7);
          if (date.getMonth() === this._monthCursor$.value.getMonth()) {
            this.ariaGrid.focus(this.getDatePosInGrid(date));
          } else {
            this.ariaChangeMonth(date, 1);
          }
          break;
        case KitAriaMoveType.prevCell:
          date.setDate(date.getDate() - 1);
          if (date.getMonth() === this._monthCursor$.value.getMonth()) {
            this.ariaGrid.focus(this.getDatePosInGrid(date));
          } else {
            this.ariaChangeMonth(date, -1);
          }
          break;
        case KitAriaMoveType.end:
          date.setMonth(date.getMonth() + 1);
          date.setDate(0);
          this.ariaGrid.focus(this.getDatePosInGrid(date));
          break;
        case KitAriaMoveType.home:
          date.setDate(1);
          this.ariaGrid.focus(this.getDatePosInGrid(date));
          break;
        case KitAriaMoveType.prevPage:
          date.setMonth(date.getMonth() - 1);
          if (date.getMonth() === this._monthCursor$.value.getMonth()) {
            this.ariaGrid.focus(this.getDatePosInGrid(date));
          } else {
            this.ariaChangeMonth(date, -1);
          }
          break;
        case KitAriaMoveType.nextPage:
          date.setMonth(date.getMonth() + 1);
          if (date.getMonth() === this._monthCursor$.value.getMonth()) {
            this.ariaGrid.focus(this.getDatePosInGrid(date));
          } else {
            this.ariaChangeMonth(date, 1);
          }
          break;
      }
    });
  }

  private initGrid() {
    this._monthCursor$.subscribe(month => {
      const grid = [];
      const cursor = this.startOfWeek(month);
      for (let row = 0; row < this.weeksInMonth(month); row++) {
        const line = [];
        for (let col = 0; col < 7; col++) {
          const date = new Date(cursor);
          line.push({
            date,
            isOutside: date.getMonth() !== month.getMonth(),
            pos: [row, col] as [number, number],
          });
          cursor.setDate(cursor.getDate() + 1);
        }
        grid.push(line);
      }
      this._grid$.next(grid);
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
