import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitInputStyle } from '../core/meta/tokens';
import { MathParser } from './math-parser';
import { KitInputType } from './meta';

export const KIT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitInputComponent),
  multi: true,
};

@Component({
  selector: 'kit-input,[kitInput]',
  template: `
    <input [ngModel]="viewState"
           (ngModelChange)="updateValue($event)"
           [attr.accesskey]="accesskey"
           [attr.autocomplete]="autocomplete"
           [attr.autofocus]="autofocus"
           [attr.maxlength]="maxlength"
           [attr.placeholder]="placeholder"
           [attr.readonly]="readonly"
           [attr.tabindex]="tabindex"
           [disabled]="disabled"
           [attr.type]="type"
           (blur)="onBlur($event)"
           (focus)="onFocus($event)"
           [styler]="['input', {disabled: disabled, readonly: readonly}]">
  `,
  providers: [KIT_INPUT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitInputComponent implements ControlValueAccessor, KitControl<any> {
  @Input() accesskey: string;

  @Input() autocomplete: boolean;

  @Input() autofocus: boolean;

  @Output() blur = new EventEmitter<FocusEvent>();

  @Input() disabled: boolean;

  @Output() focus = new EventEmitter<FocusEvent>();

  @Input() kitInput: any;

  @Input() maxlength: number;

  @Input() placeholder: string;

  @Input() readonly: boolean;

  state: any;

  @Input() tabindex: number;

  @Input() type: KitInputType = 'text';

  viewState: any;

  private changes$ = new Subject<number>();

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitInputStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-input';
    this.styler.register(this.style);
  }

  onBlur(event: FocusEvent) {
    this.blur.next(event);
    this.touches$.next(true);
  }

  onFocus(event: FocusEvent) {
    this.focus.next(event);
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
    if (this.type === 'math') {
      this.calcValue(value);
    } else {
      this.writeValue(value);
    }
    this.changes$.next(this.state);
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.state = value;
    this.viewState = value;
    this.cdr.markForCheck();
  }

  private calcValue(value: string) {
    const parsed = value ? MathParser.parse(value) : NaN;
    this.state = isNaN(parsed) ? null : parsed;
  }
}
