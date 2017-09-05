import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitCheckboxStyle } from '../core/meta/tokens';
import { uuid } from '../core/util/uuid';

export const KIT_CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitCheckboxComponent),
  multi: true,
};

/**
 * Implements `ControlValueAccessor`.
 */
@Component({
  selector: 'kit-checkbox,[kitCheckbox]',
  template: `
    <span styler="checkbox">
        <input [id]="id"
               [ngModel]="state"
               [attr.accesskey]="accesskey"
               [attr.autofocus]="autofocus"
               [attr.tabindex]="tabindex"
               [disabled]="disabled"
               (ngModelChange)="updateValue($event)"
               (blur)="onBlur($event)"
               (focus)="onFocus($event)"
               type="checkbox"
               styler="input">
        <span [styler]="'view'"
              [stylerState]="{checked: !!state, disabled: disabled, readonly: readonly, focus: focusState, hover: hoverState}">
        </span>
      </span>
    <label [attr.for]="id" styler="label">
      <ng-content></ng-content>
    </label>
  `,
  providers: [KIT_CHECKBOX_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitCheckboxComponent implements ControlValueAccessor, KitControl<any> {
  @Input() accesskey: string;

  @Input() autofocus: boolean;

  @Output() blur = new EventEmitter<FocusEvent>();

  @Input() disabled: boolean;

  @Output() focus = new EventEmitter<FocusEvent>();

  focusState: boolean;

  hoverState: boolean;

  id: string;

  @Input() kitCheckbox: null;

  @Input() readonly: boolean;

  state: any;

  @Input() tabindex: number;

  private changes$ = new Subject<number>();

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitCheckboxStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-checkbox';
    this.styler.register(this.style);
    this.id = uuid();
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.hoverState = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.hoverState = false;
  }

  onBlur(event: FocusEvent) {
    this.blur.next(event);
    this.touches$.next(true);
    this.focusState = false;
  }

  onFocus(event: FocusEvent) {
    this.focus.next(event);
    this.focusState = true;
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  updateValue(value: any) {
    if (!this.readonly) {
      this.writeValue(value);
      this.changes$.next(value);
      this.touches$.next(true);
    }
  }

  writeValue(value: any) {
    this.state = value;
    this.cdr.markForCheck();
  }
}
