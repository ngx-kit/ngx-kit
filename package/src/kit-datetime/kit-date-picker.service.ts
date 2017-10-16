import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitDatePickerGrid } from './meta';

@Injectable()
export class KitDatePickerService {
  private readonly _grid$ = new BehaviorSubject<KitDatePickerGrid>([]);

  private readonly _monthCursor$ = new BehaviorSubject<Date>(new Date());

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

  init(date: any) {
    this.initGrid();
    this._monthCursor$.next(this.startOfMonth(date));
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

  private initGrid() {
    this._monthCursor$.subscribe(month => {
      const grid = [];
      const cursor = this.startOfWeek(month);
      for (let i = 0; i < this.weeksInMonth(month); i++) {
        const line = [];
        for (let j = 0; j < 7; j++) {
          const date = new Date(cursor);
          line.push({
            date,
            isOutside: date.getMonth() !== month.getMonth(),
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
