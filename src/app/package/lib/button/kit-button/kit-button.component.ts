import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Optional,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDefined, KitClassService } from '@ngx-kit/ngx-kit';
import { Subject } from 'rxjs/Subject';
import { KitButtonGroupComponent } from '../kit-button-group/kit-button-group.component';
import { KitButtonColor, KitButtonSize } from '../meta';

export const KIT_BUTTON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitButtonComponent),
  multi: true,
};

/**
 * @todo proxy enter listener to (action)
 * @todo press enter handler
 * @todo ARIA
 *
 * @apiOrder 1
 */
@Component({
  // tslint:disable-next-line
  selector: 'button[kitButton],a[kitButton]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./kit-button.component.scss'],
  providers: [
    KIT_BUTTON_VALUE_ACCESSOR,
    KitClassService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitButtonComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() color: KitButtonColor = 'default';

  @Input() disabled = false;

  @Input() kitButton: void;

  @Input() size: KitButtonSize = 'm';

  /**
   * Needed for button-group in radio mode
   */
  @Input() value: any;

  private changes$ = new Subject<boolean>();

  private checked: boolean;

  private touches$ = new Subject<void>();

  constructor(private kitClass: KitClassService,
              @Optional() private group: KitButtonGroupComponent) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  /**
   * Listen to mouse clicks on element.
   */
  @HostListener('click')
  clickListener() {
    if (isDefined(this.value)) {
      // radio-mode
      this.checked = true;
      this.changes$.next(this.value);
    } else {
      // checkbox-mode
      this.checked = !this.checked;
      this.changes$.next(this.checked);
    }
    this.touches$.next();
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
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
    this.kitClass.apply([{
      disabled: this.disabled,
      color: this.color,
      size: this.size,
      checked: this.checked,
      groupDirection: !!this.group ? this.group.direction : null,
    }]);
  }
}
