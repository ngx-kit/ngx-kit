import { Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentSelect } from '../core/meta/tokens';
import { KitSelectOption, KitSelectType } from './meta';

export const KIT_SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitSelectComponent),
  multi: true,
};

/**
 * @todo multi
 * @todo type=dropdown
 * @todo options = isArray (value=label)
 * @todo option output template
 */
@Component({
  selector: 'kit-select,[kitSelect]',
  template: `
    <ng-container [ngSwitch]="type">
      <ng-container *ngSwitchCase="'native'">
        <select [styler]="'nativeSelect'"
                [ngModel]="value"
                (ngModelChange)="value = $event">
          <option *ngFor="let option of options"
                  [value]="option.value">
            {{ option.label }}
          </option>
        </select>
      </ng-container>
      <ng-container *ngSwitchCase="'dropdown'">
        <div [kitAnchor]
             [styler]="['dropdownSelect', {focus: dropdownOpened}]"
             (click)="dropdownOpened = true"
             #anchor="anchor">
          {{ selectedOption?.label }}
        </div>
        <kit-overlay [anchor]="anchor"
                     [opened]="dropdownOpened"
                     [position]="'bottom'"
                     [template]="contentRef"
                     [type]="'dropdown'"
                     [widthType]="'full'"
                     (outsideClick)="dropdownOpened = false"></kit-overlay>
        <ng-template #contentRef>
          <div styler="dropdownOptions">
            <div *ngFor="let option of options"
                 [styler]="['dropdownOption', {selected: option.value === value}]"
                 (click)="selectDropdownOption(option.value)">
              {{ option.label }}
            </div>
          </div>
        </ng-template>
      </ng-container>
      <ng-container *ngSwitchCase="'list'">
        <div *ngFor="let option of options"
             [styler]="['option', {selected: option.value === value}]"
             (click)="value = option.value">
          {{ option.label }}
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [KIT_SELECT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitSelectComponent<T> implements ControlValueAccessor {
  anchor: any;

  dropdownOpened = false;

  @Input() kitSelect: any;

  @Input() labelFiled = 'label';

  @Input() multi = false;

  options: KitSelectOption[] = [];

  selectedOption?: KitSelectOption;

  @Input() type: KitSelectType = 'native';

  @Input() valueField = 'value';

  private _value: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentSelect) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input('options')
  set rawOptions(rawOptions: T[]) {
    this.options = rawOptions.map(o => ({
      value: o[this.valueField],
      label: o[this.labelFiled],
    }));
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.selectedOption = this.options.find(o => o.value === value);
    this.changes$.next(value);
    this.touches$.next(true);
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  selectDropdownOption(value: any) {
    this.dropdownOpened = false;
    this.value = value;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any) {
    this.value = value;
  }
}
