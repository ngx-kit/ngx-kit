import { Directive, forwardRef, Host, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { Class } from '../class/class';

export const KIT_CHECK_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckDirective),
  multi: true,
};

@Directive({
  selector: '[evoCheck]',
  providers: [
    KIT_CHECK_VALUE_ACCESSOR,
    Class,
  ],
})
export class CheckDirective implements OnChanges, ControlValueAccessor {
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

  constructor(@Host() private cl: Class) {
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
    if (this.value !== undefined) {
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
    if (this.value !== undefined) {
      // radio-mode
      this.checked = this.value === value;
    } else {
      // checkbox-mode
      this.checked = value;
    }
    this.applyClass();
  }

  private applyClass() {
    this.cl.apply({
      checked: this.checked,
    });
  }
}
