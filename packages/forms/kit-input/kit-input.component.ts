import { Component, forwardRef, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentInput, KitComponentStyle } from '@ngx-kit/core';

export const KIT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitInputComponent),
  multi: true
};

@Component({
  selector: 'kit-input',
  template: `
    <input [ngModel]="value"
           (ngModelChange)="value = $event"
           (blur)="touch()"
           type="text"
           styler="input">
  `,
  providers: [KIT_INPUT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitInputComponent implements ControlValueAccessor {

  private _value: any;

  // @todo do not change if disabled
  private isDisabled = false;
  private changes$ = new Subject<number>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentInput) private style: KitComponentStyle) {
    this.styler.register(this.style);
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

  touch() {
    this.touches$.next(true);
  }

}
