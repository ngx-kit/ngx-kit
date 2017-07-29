import { Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitCoreService } from '../core/kit-core.service';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentToggle } from '../core/meta/tokens';

export const KIT_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitToggleComponent),
  multi: true,
};

/**
 * @todo checkbox-group
 */
@Component({
  selector: 'kit-toggle,[kitToggle]',
  template: `
    <span styler="toggle">
        <input [id]="id"
               [ngModel]="value"
               (ngModelChange)="value = $event"
               type="checkbox"
               styler="input">
        <span [styler]="['view', {checked: !!value}]">
          <span [styler]="['viewInner', {checked: !!value}]"></span>
        </span>
      </span>
    <label [attr.for]="id" styler="label">
      <ng-content></ng-content>
    </label>
  `,
  providers: [KIT_TOGGLE_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitToggleComponent implements ControlValueAccessor {
  id: string;

  @Input() kitToggle: any;

  private _value: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentToggle) private style: KitComponentStyle,
              private core: KitCoreService) {
    this.styler.register(this.style);
    this.id = this.core.uuid();
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
    this._value = value;
  }
}
