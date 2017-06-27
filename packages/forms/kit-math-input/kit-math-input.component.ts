import { AfterViewInit, Component, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentMathInput, KitComponentStyle } from '@ngx-kit/core';
import { MathParser } from '@ngx-kit/forms/kit-math-input/math-parser';
import { KitInputComponent } from '@ngx-kit/forms';

export const KIT_MATH_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitMathInputComponent),
  multi: true
};

@Component({
  selector: 'kit-math-input,[kit-math-input],[kitMathInput]',
  template: `
    <kit-input></kit-input>
    <div *ngIf="displayResult" styler="result">= {{ result }}</div>
  `,
  providers: [KIT_MATH_INPUT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ]
})
export class KitMathInputComponent implements ControlValueAccessor, AfterViewInit {

  @Input() kitMathInput: any;

  @ViewChild(forwardRef(() => KitInputComponent)) input: KitInputComponent;

  displayResult = false;

  private _result: any;
  private _value: any;

  // @todo do not change if disabled
  private isDisabled = false;
  private changes$ = new Subject<number>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMathInput) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngAfterViewInit() {
    this.input.registerOnTouched(this.touches$);
    this.input.registerOnChange((value: any) => {
      this.value = value;
    });
  }

  writeValue(value: any) {
    this.value = value;
    this.input.writeValue(this.value);
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
    this.input.setDisabledState(this.isDisabled);
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
