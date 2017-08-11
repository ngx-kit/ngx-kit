import { ChangeDetectorRef, Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitComponentTextarea } from '../core/meta/tokens';

export const KIT_TEXTAREA_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitTextareaComponent),
  multi: true,
};

@Component({
  selector: 'kit-textarea,[kitTextarea]',
  template: `
    <textarea [ngModel]="state"
              (ngModelChange)="updateValue($event)"
              (blur)="touch()"
              styler="textarea"></textarea>
  `,
  providers: [KIT_TEXTAREA_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTextareaComponent implements ControlValueAccessor, KitControl<any> {
  @Input() kitTextarea: any;

  state: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTextarea) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-textarea';
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
