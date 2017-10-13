import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { UiCustomSelectOption } from '../meta';

export const uiCustomSelectValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiCustomSelectComponent),
  multi: true,
};

@Component({
  selector: 'ui-custom-select',
  templateUrl: './ui-custom-select.component.html',
  styleUrls: ['./ui-custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [uiCustomSelectValueAccessor],
  animations: [
    trigger('popup', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
        }),
        animate('100ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate('100ms', style({
          opacity: 0,
          transform: 'translateY(-5px)',
        })),
      ]),
    ]),
  ],
})
export class UiCustomSelectComponent implements OnInit, ControlValueAccessor {
  displayPopup = false;

  @Input() options: UiCustomSelectOption[] = [];

  viewState: any;

  private changes$ = new Subject<any>();

  private disabled = false;

  private state: any;

  private touches$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef,
              private el: ElementRef) {
  }

  get nativeEl() {
    return this.el.nativeElement;
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickHandler() {
    this.displayPopup = !this.displayPopup;
  }

  closePopup() {
    this.displayPopup = false;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  select(value: any) {
    this.state = value;
    this.changes$.next(this.state);
    this.updateViewState();
    this.displayPopup = false;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    this.state = rawValue;
    this.updateViewState();
    this.cdr.markForCheck();
  }

  private updateViewState() {
    this.viewState = this.options.find(o => o.value === this.state);
  }
}
