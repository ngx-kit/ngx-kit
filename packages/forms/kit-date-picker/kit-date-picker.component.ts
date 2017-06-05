import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentDatePicker, KitDatePickerStyle } from '@ngx-kit/core';

import * as moment from 'moment';

export const KIT_DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitDatePickerComponent),
  multi: true,
};

@Component({
  selector: 'kit-date-picker',
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
  ]
})
export class KitDatePickerComponent implements OnInit, ControlValueAccessor {

  datesGrid: {date: any, isActive: boolean, isOutside: boolean}[] = [];
  weekdays: any;

  private _date: any;

  // @todo do not change if disabled
  private isDisabled = false;
  private changes$ = new Subject<string>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDatePicker) private style: KitDatePickerStyle) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
    this.weekdays = moment.weekdaysMin();
  }

  writeValue(value: any) {
    this.value = value;
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

  get value(): string {
    return this._date.format('YYYY-MM-DD');
  }

  set value(value: string) {
    this._date = moment(value);
    this.updateDatesGrid();
    this.changes$.next(this.value);
    this.touches$.next(true);
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

  updateDatesGrid() {
    this.datesGrid = [];
    if (this._date) {
      let cursor = moment(this._date);
      cursor.startOf('month').startOf('week');
      let end = moment(this._date);
      end.endOf('month').endOf('week').add(1, 'day');
      while (!cursor.isSame(end, 'day')) {
        this.datesGrid.push({
          date: moment(cursor),
          isOutside: cursor.month() != this._date.month(),
          isActive: cursor.isSame(this._date, 'day'),
        });
        cursor.add(1, 'day');
      }
    }
  }

  add(amount: any, unit: string): void {
    let m = moment(this._date);
    m.add(amount, unit);
    this._date = m;
    this.updateDatesGrid();
  }

}
