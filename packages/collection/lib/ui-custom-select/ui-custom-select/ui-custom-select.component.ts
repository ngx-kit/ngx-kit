import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KitOverlayToggleDirective } from '@ngx-kit/core';
import { Subject } from 'rxjs';
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
    trigger('popupHost', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
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
      transition(':leave', [
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
  @Input() options: UiCustomSelectOption[] = [];

  @ViewChild('toggle') toggle: KitOverlayToggleDirective;

  viewState: any;

  private changes = new Subject<any>();

  private disabled = false;

  private state: any;

  private touches = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
  ) {
  }

  get nativeEl() {
    return this.el.nativeElement;
  }

  ngOnInit() {
  }

  registerOnChange(fn: any) {
    this.changes.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  select(value: any) {
    this.state = value;
    this.changes.next(this.state);
    this.updateViewState();
    this.toggle.close();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    this.state = rawValue;
    this.updateViewState();
    this.cdr.detectChanges();
  }

  private updateViewState() {
    this.viewState = this.options.find(o => o.value === this.state);
  }
}
