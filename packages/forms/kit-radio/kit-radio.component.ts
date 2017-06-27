import { Component, forwardRef, HostBinding, HostListener, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { kitComponentRadio, KitComponentStyle, KitCoreService } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';

export const KIT_RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitRadioComponent),
  multi: true,
};

/**
 * @todo radio-group
 */
@Component({
  selector: 'kit-radio,[kit-radio],[kitRadio]',
  template: `
    <span styler="radio">
        <input [id]="id"
               [value]="value"
               [ngModel]="checked ? value : null"
               (ngModelChange)="checked = $event"
               type="radio"
               styler="input">
        <span [styler]="['view', {checked: checked, hover: hover}]"></span>
      </span>
    <label [attr.for]="id" styler="label">
      <ng-content></ng-content>
    </label>
  `,
  providers: [KIT_RADIO_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitRadioComponent implements ControlValueAccessor {
  hover = false;

  id: string;

  @Input() kitRadio: any;

  @Input() value: any;

  private _checked: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentRadio) private style: KitComponentStyle,
              private core: KitCoreService) {
    this.styler.register(this.style);
    this.id = this.core.uuid();
  }

  get checked(): any {
    return this._checked;
  }

  set checked(value: any) {
    this._checked = value === this.value;
    if (this._checked) {
      this.changes$.next(this.value);
      this.touches$.next(true);
    }
  }

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.hover = false;
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

  writeValue(value: any) {
    this._checked = this.value === value;
  }
}
