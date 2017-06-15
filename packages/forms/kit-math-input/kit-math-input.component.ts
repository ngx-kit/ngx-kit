import { Component, forwardRef, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentInput, KitInputStyle } from '@ngx-kit/core';
import { MathParser } from '@ngx-kit/forms/kit-math-input/math-parser';

export const KIT_MATH_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitMathInputComponent),
  multi: true
};

@Component({
  selector: 'kit-math-input',
  template: `
    <input type="text" [ngModel]="value" (ngModelChange)="value = $event" (blur)="touch()">
    <div *ngIf="displayResult">= {{ result }}</div>
  `,
  providers: [KIT_MATH_INPUT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ]
})
export class KitMathInputComponent implements ControlValueAccessor {

  displayResult = false;

  private _result: any;
  private _value: any;

  // @todo do not change if disabled
  private isDisabled = false;
  private changes$ = new Subject<number>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentInput) private style: KitInputStyle) {
    this.styler.register(this.style.getStyles());
  }

  writeValue(value: any) {
    this.value = value;
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
    // parse input and set result
    const parsed = this._value ? MathParser.parse(this._value) : NaN;
    this._result = isNaN(parsed) ? null : parsed;
    this.displayResult = this._result && this._value != this._result;
    // emit
    this.changes$.next(this._result);
    this.touches$.next(true);
  }

  get result(): any {
    return this._result;
  }

  touch() {
    this.touches$.next(true);
  }

}
