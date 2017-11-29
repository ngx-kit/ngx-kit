import { Directive, forwardRef, Host, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { KitClassService } from '../../kit-class/kit-class.service';
import { isDefined } from '../../util/is-defined';

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
 * For a value changing the directive listen click event.
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

  registerOnChange(fn: any) {
    this.changes.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

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
