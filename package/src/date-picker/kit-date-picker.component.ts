import { Component, forwardRef, Inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentDatePicker } from '../core/meta/tokens';

declare const moment: any;
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
    <div styler="years">
      <div [styler]="['year', {type: 'change'}]" (click)="add(-1, 'year')">&larr;</div>
      <div [styler]="['year', {type: 'current'}]">{{ date?.year() }}</div>
      <div [styler]="['year', {type: 'change'}]" (click)="add(1, 'year')">&rarr;</div>
    </div>
    <div styler="months">
      <div [styler]="['month', {type: 'change'}]" (click)="add(-1, 'month')">&larr;</div>
      <div [styler]="['month', {type: 'current'}]">{{ date?.format('MMMM') }}</div>
      <div [styler]="['month', {type: 'change'}]" (click)="add(1, 'month')">&rarr;</div>
    </div>
    <div styler="weekdays">
      <div styler="weekday" *ngFor="let weekday of weekdays">{{ weekday }}</div>
    </div>
    <div styler="dates">
      <div *ngFor="let item of datesGrid"
           [styler]="['date', {active: item.isActive, outside: item.isOutside}]"
           (mouseup)="date = item.date">
        {{ item.date.date() }}
      </div>
    </div>
  `,
  providers: [KIT_DATE_PICKER_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitDatePickerComponent implements OnInit, ControlValueAccessor {
  datesGrid: {date: any, isActive: boolean, isOutside: boolean}[] = [];

  @Input() kitDatePicker: any;

  weekdays: any;

  private _date: any;

  private changes$ = new Subject<string>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDatePicker) private style: KitComponentStyle) {
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
    const m = moment(this._date);
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
      this._date = moment();
    }
    // calc grids
    this.datesGrid = [];
    const cursor = moment(this._date);
    cursor.startOf('month').startOf('week');
    const end = moment(this._date);
    end.endOf('month').endOf('week').add(1, 'day');
    while (!cursor.isSame(end, 'day')) {
      this.datesGrid.push({
        date: moment(cursor),
        isOutside: cursor.month() !== this._date.month(),
        isActive: cursor.isSame(this._date, 'day'),
      });
      cursor.add(1, 'day');
    }
  }

  writeValue(value: any) {
    this._date = moment(value);
    this.updateDatesGrid();
  }
}
