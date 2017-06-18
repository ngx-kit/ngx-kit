import { Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentRadio, KitComponentStyle, KitCoreService } from '@ngx-kit/core';

export const KIT_RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitRadioComponent),
  multi: true,
};

/**
 * @todo radio-group
 */
@Component({
  selector: 'kit-radio',
  template: `
    <span styler="radio">
        <input [id]="id"
               [value]="value"
               [ngModel]="checked ? value : null"
               (ngModelChange)="checked = $event"
               type="radio"
               styler="input">
        <span [styler]="['view', {checked: checked}]"></span>
      </span>
    <label [attr.for]="id" styler="label">
      <ng-content></ng-content>
    </label>
  `,
  providers: [KIT_RADIO_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ]
})
export class KitRadioComponent implements ControlValueAccessor {

  @Input() value: any;

  id: string;

  private _checked: any;

  // @todo do not change if disabled
  private isDisabled = false;
  private changes$ = new Subject<number>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentRadio) private style: KitComponentStyle,
              private core: KitCoreService) {
    this.styler.register(this.style.getStyles());
    this.id = this.core.uuid();
  }

  writeValue(value: any) {
    this._checked = this.value === value;
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

}