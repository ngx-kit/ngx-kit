import { AfterViewInit, Component, forwardRef, Inject, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentMathInput } from '../core/meta/tokens';
import { KitInputComponent } from '../input/kit-input.component';
import { MathParser } from './math-parser';

export const KIT_MATH_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitMathInputComponent),
  multi: true,
};

@Component({
  selector: 'kit-math-input,[kitMathInput]',
  template: `
    <kit-input></kit-input>
    <div *ngIf="displayResult" styler="result">= {{ result }}</div>
  `,
  providers: [KIT_MATH_INPUT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMathInputComponent implements ControlValueAccessor, AfterViewInit {
  displayResult = false;

  @ViewChild(forwardRef(() => KitInputComponent)) input: KitInputComponent;

  @Input() kitMathInput: any;

  private _result: any;

  private _value: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMathInput) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-math-input';
    this.styler.register(this.style);
  }

  get result(): any {
    return this._result;
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    // parse input and set result
    const parsed = this._value ? MathParser.parse(this._value) : NaN;
    this._result = isNaN(parsed) ? null : parsed;
    this.displayResult = this._result && this._value !== this._result;
    // emit
    this.changes$.next(this._result);
    this.touches$.next(true);
  }

  ngAfterViewInit() {
    this.input.registerOnTouched(this.touches$);
    this.input.registerOnChange((value: any) => {
      this.value = value;
    });
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

  touch() {
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.value = value;
    this.input.writeValue(this.value);
  }
}
