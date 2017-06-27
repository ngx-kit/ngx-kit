import { Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentCheckbox, KitComponentStyle, KitCoreService } from '@ngx-kit/core';

export const KIT_CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitCheckboxComponent),
  multi: true
};

/**
 * @todo checkbox-group
 */
@Component({
  selector: 'kit-checkbox,[kit-checkbox],[kitCheckbox]',
  template: `
    <span styler="checkbox">
        <input [id]="id"
               [ngModel]="value"
               (ngModelChange)="value = $event"
               type="checkbox"
               styler="input">
        <span [styler]="['view', {checked: !!value}]"></span>
      </span>
    <label [attr.for]="id" styler="label">
      <ng-content></ng-content>
    </label>
  `,
  providers: [KIT_CHECKBOX_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ]
})
export class KitCheckboxComponent implements ControlValueAccessor {

  @Input() kitCheckbox: any;

  id: string;

  private _value: any;

  // @todo do not change if disabled
  private isDisabled = false;
  private changes$ = new Subject<number>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentCheckbox) private style: KitComponentStyle,
              private core: KitCoreService) {
    this.styler.register(this.style);
    this.id = this.core.uuid();
  }

  writeValue(value: any) {
    this._value = value;
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

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.changes$.next(value);
    this.touches$.next(true);
  }

}
