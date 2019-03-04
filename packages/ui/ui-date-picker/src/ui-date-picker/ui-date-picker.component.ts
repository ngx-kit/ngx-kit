import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KitDatePickerGrid, KitDatePickerService } from '@ngx-kit/core';
import { Observable, Subject } from 'rxjs';

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
    KitDatePickerService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDatePickerComponent implements OnInit, ControlValueAccessor {
  datesGrid: Observable<KitDatePickerGrid>;

  monthCursor: Observable<Date | null>;

  weekdays: Date[] = [];

  @ViewChild('grid') grid: ElementRef;

  private changes = new Subject<Date>();

  private isDisabled = false;

  private state: Date;

  private touches = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private service: KitDatePickerService,
  ) {
  }

  ngOnInit() {
    this.weekdays = this.service.weekdays;
    this.monthCursor = this.service.monthCursorChanges;
    this.datesGrid = this.service.gridChanges;
    this.service.pick.subscribe(date => {
      this.setDate(date);
    });
    this.service.handleMove(this.grid.nativeElement);
  }

  @HostListener('swiperight') swiperightHandler() {
    this.modMonth(1);
  }

  @HostListener('swipeleft') swipeleftHandler() {
    this.modMonth(-1);
  }

  modMonth(modifier: number) {
    this.service.modMonth(modifier);
    this.touches.next();
  }

  modYear(modifier: number) {
    this.service.modYear(modifier);
    this.touches.next();
  }

  registerOnChange(fn: any) {
    this.changes.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  setDate(date: Date) {
    this.state = date;
    this.service.active = this.state;
    this.changes.next(this.state);
    this.touches.next();
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  writeValue(rawValue: any) {
    this.state = rawValue ? new Date(rawValue) : new Date();
    this.service.active = this.state;
    this.cdr.detectChanges();
  }
}
