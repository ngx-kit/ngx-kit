import { Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { kitComponentSelect, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';

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
  selector: 'kit-select,[kit-select],[kitSelect]',
  template: `
    <div *ngFor="let option of options"
         [styler]="['option', {selected: option[valueField] === value}]"
         (click)="value = option[valueField]">
      {{ option[labelFiled] }}
    </div>
  `,
  providers: [KIT_SELECT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitSelectComponent<T> implements ControlValueAccessor {
  @Input() kitSelect: any;

  @Input() labelFiled = 'label';

  @Input() multi = false;

  @Input() options: T[] = [];

  @Input() type: 'list' | 'dropdown' = 'list';

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

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.changes$.next(value);
    this.touches$.next(true);
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
    this.value = value;
  }
}
