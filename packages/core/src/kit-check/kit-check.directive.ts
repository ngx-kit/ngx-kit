import { Directive, forwardRef, Host, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { KitClassService } from '../kit-class/kit-class.service';
import { isDefined } from '../util/is-defined';

export const KIT_CHECK_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitCheckDirective),
  multi: true,
};

/**
 * Adds to any element ValueAccessor and checkbox/radio behavior.
 *
 * When is checked - adds class "checked" to the element.
 *
 * For a value changing the directive listen click event. Directive implements `ControlValueAccessor` interface and
 * changes `ngModel` value on click event.
 *
 *
 * ### Usage
 *
 * #### Emit checkboxes behavior:
 *
 * ```html
 * <button kitCheck [(ngModel)]="buttonModel1">Checkbox button 1</button>
 * <button kitCheck [(ngModel)]="buttonModel2">Checkbox button 2</button>
 * <button kitCheck [(ngModel)]="buttonModel3">Checkbox button 3</button>
 * ```
 *
 * #### Emit radio behavior
 *
 * ```html
 * <button kitCheck [(ngModel)]="buttonModel" [value]="1">Radio button 1</button>
 * <button kitCheck [(ngModel)]="buttonModel" [value]="2">Radio button 2</button>
 * <button kitCheck [(ngModel)]="buttonModel" [value]="3">Radio button 3</button>
 * ```
 *
 *
 * ### Example
 *
 * * collection:button - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-button),
 * [demo](http://ngx-kit.com/collection/module/ui-button)
 */
@Directive({
  selector: '[kitCheck]',
  providers: [
    KIT_CHECK_VALUE_ACCESSOR,
    KitClassService,
  ],
})
export class KitCheckDirective implements OnChanges, ControlValueAccessor {
  /**
   * Class applied when active.
   */
  @Input() checkedClass = 'checked';

  /**
   * @internal
   */
  @Input() kitCheck: void;

  /**
   * Value that passed to VALUE_ACCESSOR.
   *
   * Enables radio-behavior.
   */
  @Input() value: any;

  private changes = new Subject<boolean>();

  private checked: boolean;

  private disabled: boolean;

  private touches = new Subject<void>();

  constructor(@Host() private kitClass: KitClassService) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  /**
   * Listen to mouse clicks on element.
   *
   * @internal
   */
  @HostListener('click')
  clickListener() {
    if (isDefined(this.value)) {
      // radio-mode
      this.checked = true;
      this.changes.next(this.value);
    } else {
      // checkbox-mode
      this.checked = !this.checked;
      this.changes.next(this.checked);
    }
    this.touches.next();
    this.applyClass();
  }

  /**
   * @internal
   */
  registerOnChange(fn: any) {
    this.changes.subscribe(fn);
  }

  /**
   * @internal
   */
  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  /**
   * @internal
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /**
   * @internal
   */
  writeValue(value: any) {
    if (isDefined(this.value)) {
      // radio-mode
      this.checked = this.value === value;
    } else {
      // checkbox-mode
      this.checked = value;
    }
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      checked: this.checked,
    });
  }
}
