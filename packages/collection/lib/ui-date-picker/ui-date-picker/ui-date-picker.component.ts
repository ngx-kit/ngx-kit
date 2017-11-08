import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KitDatePickerGrid, KitDatePickerService, KitGridControlService } from '@ngx-kit/ngx-kit';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export const uiDatePickerValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiDatePickerComponent),
  multi: true,
};

@Component({
  selector: 'ui-date-picker',
  templateUrl: './ui-date-picker.component.html',
  styleUrls: ['./ui-date-picker.component.scss'],
  providers: [
    uiDatePickerValueAccessor,
    KitGridControlService,
    KitDatePickerService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDatePickerComponent implements OnInit, ControlValueAccessor {
  datesGrid$: Observable<KitDatePickerGrid>;

  monthCursor$: Observable<Date>;

  weekdays: Date[] = [];

  private changes$ = new Subject<Date>();

  private isDisabled = false;

  private state: Date;

  private touches$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef,
              private service: KitDatePickerService) {
  }

  ngOnInit() {
    this.weekdays = this.service.weekdays;
    this.monthCursor$ = this.service.monthCursor$;
    this.datesGrid$ = this.service.grid$;
    this.service.pick.subscribe(date => {
      this.setDate(date);
    });
  }

  modMonth(modifier: number) {
    this.service.modMonth(modifier);
    this.touches$.next();
  }

  modYear(modifier: number) {
    this.service.modYear(modifier);
    this.touches$.next();
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDate(date: Date) {
    this.state = date;
    this.service.active = this.state;
    this.changes$.next(this.state);
    this.touches$.next();
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  writeValue(rawValue: any) {
    this.state = rawValue ? new Date(rawValue) : new Date();
    this.service.active = this.state;
    this.cdr.markForCheck();
  }
}
