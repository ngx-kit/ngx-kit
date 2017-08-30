import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitTextareaStyle } from '../core/meta/tokens';
import { KitTextareaWrap } from './meta';

export const KIT_TEXTAREA_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitTextareaComponent),
  multi: true,
};

@Component({
  selector: 'kit-textarea,[kitTextarea]',
  template: `
    <textarea [ngModel]="state"
              [attr.accesskey]="accesskey"
              [attr.autofocus]="autofocus"
              [attr.maxlength]="maxlength"
              [attr.rows]="rows"
              [attr.placeholder]="placeholder"
              [attr.readonly]="readonly"
              [attr.tabindex]="tabindex"
              [attr.wrap]="wrap"
              [disabled]="disabled"
              [styler]="'textarea'"
              [stylerState]="{disabled: disabled, readonly: readonly}"
              (ngModelChange)="updateValue($event)"
              (blur)="onBlur($event)"
              (focus)="onFocus($event)">
    </textarea>
  `,
  providers: [KIT_TEXTAREA_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTextareaComponent implements ControlValueAccessor, KitControl<any> {
  @Input() accesskey: string;

  @Input() autofocus: boolean;

  @Output() blur = new EventEmitter<FocusEvent>();

  @Input() disabled: boolean;

  @Output() focus = new EventEmitter<FocusEvent>();

  @Input() kitTextarea: any;

  @Input() maxlength: number;

  @Input() placeholder: string;

  @Input() readonly: boolean;

  @Input() rows: number;

  state: any;

  @Input() tabindex: number;

  @Input() wrap: KitTextareaWrap = 'off';

  private changes$ = new Subject<number>();

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitTextareaStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-textarea';
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
    this.writeValue(value);
    this.changes$.next(value);
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.state = value;
    this.cdr.markForCheck();
  }
}
