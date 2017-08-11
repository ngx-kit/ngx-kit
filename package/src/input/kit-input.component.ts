import { ChangeDetectorRef, Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitComponentInput } from '../core/meta/tokens';

export const KIT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitInputComponent),
  multi: true,
};

@Component({
  selector: 'kit-input,[kitInput]',
  template: `
    <input [ngModel]="state"
           (ngModelChange)="updateValue($event)"
           (blur)="touch()"
           type="text"
           styler="input">
  `,
  providers: [KIT_INPUT_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitInputComponent implements ControlValueAccessor, KitControl<any> {
  @Input() kitInput: any;

  state: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentInput) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-input';
    this.styler.register(this.style);
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

  touch() {
    this.touches$.next(true);
  }

  updateValue(value: any) {
    this.writeValue(value);
    this.changes$.next(value);
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.state = value;
    this.cdr.markForCheck();
  }
}
