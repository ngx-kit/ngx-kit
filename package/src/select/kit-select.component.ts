import { ChangeDetectorRef, Component, forwardRef, Inject, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitComponentSelect } from '../core/meta/tokens';
import { isObject } from '../core/util/is-object';
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
                [ngModel]="state"
                (ngModelChange)="updateValue($event)">
          <ng-container *ngIf="!optionTemplateRef">
            <option *ngFor="let option of options"
                    [value]="option.value">
              {{ option.label }}
            </option>
          </ng-container>
          <ng-container *ngIf="optionTemplateRef">
            <ng-container *ngFor="let option of options">
              <ng-container *ngTemplateOutlet="optionTemplateRef; context: {$implicit: option}"></ng-container>
            </ng-container>
          </ng-container>
        </select>
      </ng-container>
      <ng-container *ngSwitchCase="'dropdown'">
        <div [kitAnchor]
             [styler]="['dropdownSelect', {focus: dropdownOpened}]"
             (click)="dropdownOpened = true"
             #anchor="anchor">
          <ng-container *ngIf="!optionTemplateRef">{{ selectedOption?.label }}</ng-container>
          <ng-container *ngIf="optionTemplateRef">
            <ng-container *ngTemplateOutlet="optionTemplateRef; context: {$implicit: selectedOption}"></ng-container>
          </ng-container>
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
                 [styler]="['dropdownOption', {selected: option.value === state}]"
                 (click)="selectDropdownOption(option.value)">
              <ng-container *ngIf="!optionTemplateRef">{{ option.label }}</ng-container>
              <ng-container *ngIf="optionTemplateRef">
                <ng-container *ngTemplateOutlet="optionTemplateRef; context: {$implicit: option}"></ng-container>
              </ng-container>
            </div>
          </div>
        </ng-template>
      </ng-container>
      <ng-container *ngSwitchCase="'list'">
        <div *ngFor="let option of options"
             [styler]="['option', {selected: option.value === state}]"
             (click)="updateValue(option.value)">
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
export class KitSelectComponent<T> implements ControlValueAccessor, KitControl<any> {
  anchor: any;

  dropdownOpened = false;

  @Input() kitSelect: any;

  @Input() labelField = 'label';

  @Input() multi = false;

  @Input() optionTemplateRef: TemplateRef<any>;

  options: KitSelectOption[] = [];

  selectedOption?: KitSelectOption;

  state: any;

  @Input() type: KitSelectType = 'native';

  @Input() valueField = 'value';

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentSelect) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-select';
    this.styler.register(this.style);
  }

  @Input('options')
  set rawOptions(rawOptions: T[]) {
    this.options = rawOptions.map(o => ({
      value: isObject(o) ? o[this.valueField] : o,
      label: isObject(o) ? o[this.labelField] : o,
    }));
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  selectDropdownOption(value: any) {
    this.dropdownOpened = false;
    this.updateValue(value);
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  updateValue(value: any) {
    this.writeValue(value);
    this.changes$.next(value);
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.state = value;
    this.selectedOption = this.options.find(o => o.value === value);
    this.cdr.markForCheck();
  }
}
