import { ChangeDetectionStrategy, Component, forwardRef, Inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitDatePickerStyle } from '../core/meta/tokens';

export const KIT_DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitDatePickerComponent),
  multi: true,
};

/**
 * @todo implement KitControl
 */
@Component({
  selector: 'kit-date-picker,[kitDatePicker]',
  template: `
    <div styler="head">
      <button [kitButton] [size]="headButtonSize" (click)="add(-1, 'year')" styler="headButton">&lArr;</button>
      <button [kitButton] [size]="headButtonSize" (click)="add(-1, 'month')" styler="headButton">&larr;</button>
      <div styler="headTitle">{{ date?.format('MMMM YYYY') }}</div>
      <button [kitButton] [size]="headButtonSize" (click)="add(1, 'month')" styler="headButton">&rarr;</button>
      <button [kitButton] [size]="headButtonSize" (click)="add(1, 'year')" styler="headButton">&rArr;</button>
    </div>
    <table styler="table">
      <thead>
      <tr>
        <th styler="weekday" *ngFor="let weekday of weekdays">{{ weekday }}</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let line of datesGrid">
        <td *ngFor="let item of line">
          <button [kitButton]
                  [color]="item.isActive ? 'primary' : 'default'"
                  [styler]="['date', {active: item.isActive, outside: item.isOutside}]"
                  (mouseup)="date = item.date">
            {{ item.date.date() }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  providers: [KIT_DATE_PICKER_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitDatePickerComponent implements OnInit, ControlValueAccessor {
  datesGrid: {date: any, isActive: boolean, isOutside: boolean}[][] = [];

  @Input() headButtonSize = 'xs';

  @Input() kitDatePicker: any;

  weekdays: any;

  private _date: any;

  private changes$ = new Subject<string>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitDatePickerStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-date-picker';
    this.styler.register(this.style);
  }

  get date(): any {
    return this._date;
  }

  set date(date: any) {
    this._date = date;
    this.updateDatesGrid();
    this.changes$.next(this.value);
    this.touches$.next(true);
  }

  get value(): string {
    return this._date.format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.weekdays = moment.weekdaysMin();
    this.updateDatesGrid();
  }

  add(amount: any, unit: string): void {
    const m = (<any>moment).default(this._date);
    m.add(amount, unit);
    this._date = m;
    this.updateDatesGrid();
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  updateDatesGrid() {
    // set today if empty or invalid
    if (!this._date || !this._date.isValid()) {
      this._date = (<any>moment).default();
    }
    // calc grids
    this.datesGrid = [];
    const cursor = (<any>moment).default(this._date);
    cursor.startOf('month').startOf('week');
    const end = (<any>moment).default(this._date);
    end.endOf('month').endOf('week').add(1, 'day');
    let line = [];
    while (!cursor.isSame(end, 'day')) {
      line.push({
        date: (<any>moment).default(cursor),
        isOutside: cursor.month() !== this._date.month(),
        isActive: cursor.isSame(this._date, 'day'),
      });
      cursor.add(1, 'day');
      if (line.length === 7) {
        this.datesGrid.push(line);
        line = [];
      }
    }
  }

  writeValue(value: any) {
    this._date = (<any>moment).default(value);
    this.updateDatesGrid();
  }
}
