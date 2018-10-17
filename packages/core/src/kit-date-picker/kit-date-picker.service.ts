import { Injectable, OnDestroy, Optional, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { KitDatePickerGrid } from './meta';

/**
 * Service encapsulates complex date-picker grid logic.
 *
 *
 * ### Example
 *
 * * collection:date-picker -
 * [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-date-picker),
 * [demo](https://ngx-kit.com/collection/module/ui-date-picker)
 */
@Injectable()
export class KitDatePickerService implements OnDestroy {
  private _active: Date;

  private _focus: Date;

  private moveHandlerUnsubs: any[] = [];

  private readonly _grid = new BehaviorSubject<KitDatePickerGrid>([]);

  private readonly _monthCursor = new BehaviorSubject<Date | null>(null);

  private readonly _pick = new Subject<Date>();

  constructor(@Optional() private renderer: Renderer2) {
  }

  /**
   * Get active date.
   */
  get active() {
    return new Date();
  }

  /**
   * Set active date.
   */
  set active(date: Date) {
    this._active = new Date(date);
    this._focus = new Date(date);
    this.updateGrid();
  }

  /**
   * Observable with grid state.
   */
  get gridChanges(): Observable<KitDatePickerGrid> {
    return this._grid.asObservable();
  }

  /**
   * Observable with month cursor state.
   */
  get monthCursorChanges(): Observable<Date | null> {
    return this._monthCursor.asObservable();
  }

  /**
   * Observable with pick date events.
   */
  get pick(): Observable<Date> {
    return this._pick.asObservable();
  }

  /**
   * Weekdays array.
   */
  get weekdays(): Date[] {
    const weekdays = [];
    const cursor = this.startOfWeek(new Date());
    for (let i = 0; i < 7; i++) {
      weekdays.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    return weekdays;
  }

  ngOnDestroy() {
    this.moveHandlerUnsubs.forEach(u => u());
  }

  /**
   * Focus date (open correspondent month).
   */
  focus(date: Date) {
    this._focus = new Date(date);
    this.updateGrid();
  }

  /**
   * Modify opened month.
   */
  modMonth(modifier: number) {
    this._focus.setMonth(this._focus.getMonth() + modifier);
    this.updateGrid();
  }

  /**
   * Modify opened year.
   */
  modYear(modifier: number) {
    this._focus.setFullYear(this._focus.getFullYear() + modifier);
    this.updateGrid();
  }

  /**
   * Handle keyboard movement.
   */
  handleMove(target: any) {
    if (this.renderer) {
      this.moveHandlerUnsubs = [
        this.renderer.listen(target, 'keydown.ArrowRight', e => {
          e.preventDefault();
          this._focus.setDate(this._focus.getDate() + 1);
          this.updateGrid();
        }),
        this.renderer.listen(target, 'keydown.ArrowLeft', e => {
          e.preventDefault();
          this._focus.setDate(this._focus.getDate() - 1);
          this.updateGrid();
        }),
        this.renderer.listen(target, 'keydown.ArrowUp', e => {
          e.preventDefault();
          this._focus.setDate(this._focus.getDate() - 7);
          this.updateGrid();
        }),
        this.renderer.listen(target, 'keydown.ArrowDown', e => {
          e.preventDefault();
          this._focus.setDate(this._focus.getDate() + 7);
          this.updateGrid();
        }),
        this.renderer.listen(target, 'keydown.Home', e => {
          e.preventDefault();
          this._focus.setDate(1);
          this.updateGrid();
        }),
        this.renderer.listen(target, 'keydown.End', e => {
          e.preventDefault();
          this._focus.setMonth(this._focus.getMonth() + 1, 0);
          this.updateGrid();
        }),
        this.renderer.listen(target, 'keydown.PageUp', e => {
          e.preventDefault();
          this.modMonth(-1);
        }),
        this.renderer.listen(target, 'keydown.PageDown', e => {
          e.preventDefault();
          this.modMonth(1);
        }),
        this.renderer.listen(target, 'keydown.Alt.PageUp', e => {
          e.preventDefault();
          this.modYear(-1);
        }),
        this.renderer.listen(target, 'keydown.Alt.PageDown', e => {
          e.preventDefault();
          this.modYear(1);
        }),
        this.renderer.listen(target, 'keydown.Enter', e => {
          e.preventDefault();
          this._pick.next(new Date(this._focus));
        }),
        this.renderer.listen(target, 'keydown.Space', e => {
          e.preventDefault();
          this._pick.next(new Date(this._focus));
        }),
      ];
    }
  }

  /**
   * Compare two dates.
   */
  private isDatesEqual(x: Date, y: Date): boolean {
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

  /**
   * Start of month of passed date.
   */
  private startOfMonth(curr: Date) {
    return new Date(curr.getFullYear(), curr.getMonth(), 1);
  }

  /**
   * Start of week of passed date.
   */
  private startOfWeek(curr: Date) {
    const date = new Date(curr);
    const day = date.getDay() || 7;
    if (day !== 1) {
      date.setHours(-24 * (day - 1));
    }
    return date;
  }

  /**
   * Redraw grid based on monthCursor and current date.
   */
  private updateGrid() {
    if (this._monthCursor.value &&
      this.isDatesEqual(this.startOfMonth(this._focus), this.startOfMonth(this._monthCursor.value))) {
      // update current grid
      const grid = this._grid.value;
      grid.forEach(r => r.forEach(c => {
        c.active = this.isDatesEqual(c.date, this._active);
        c.focus = this.isDatesEqual(c.date, this._focus);
      }));
      this._grid.next(grid);
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
      this._monthCursor.next(month);
      this._grid.next(grid);
    }
  }

  /**
   * Calc number of weeks in month.
   */
  private weeksInMonth(curr: Date): number {
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
