import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitRadioGroupStyle } from '../core/meta/tokens';
import { isObject } from '../core/util/is-object';
import { KitRadioComponent } from './kit-radio.component';
import { KitRadioGroupDirection, KitRadioGroupOption } from './meta';

export const KIT_RADIO_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitRadioGroupComponent),
  multi: true,
};

/**
 * @todo [vertical]
 * @todo [options]
 */
@Component({
  selector: 'kit-radio-group,[kitRadioGroup]',
  template: `
    <ng-container *ngIf="options">
      <kit-radio *ngFor="let option of options"
                 [value]="option.value"
                 [ngModel]="state"
                 (ngModelChange)="updateValue($event)">
        {{ option.label }}
      </kit-radio>
    </ng-container>
    <ng-container *ngIf="!options">
      <ng-content></ng-content>
    </ng-container>
  `,
  providers: [KIT_RADIO_GROUP_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitRadioGroupComponent<T> implements ControlValueAccessor, AfterContentInit, KitControl<any>, OnChanges {
  @Input() direction: KitRadioGroupDirection = 'horizontal';

  hover = false;

  @Input() kitRadioGroup: any;

  @Input() labelField = 'label';

  options: KitRadioGroupOption[];

  @ContentChildren(forwardRef(() => KitRadioComponent)) radios: QueryList<KitRadioComponent>;

  state: any;

  @Input() valueField = 'value';

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitRadioGroupStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-radio-group';
    this.styler.register(this.style);
  }

  @Input('options')
  set rawOptions(rawOptions: T[]) {
    this.options = rawOptions.map(o => ({
      value: isObject(o) ? o[this.valueField] : o,
      label: isObject(o) ? o[this.labelField] : o,
    }));
  }

  ngAfterContentInit() {
    this.proxyValue();
    this.handleRadioChanges();
  }

  ngOnChanges() {
    this.styler.host.applyState({direction: this.direction});
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.hover = false;
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

  updateValue(value: any) {
    this.writeValue(value);
    this.changes$.next(this.state);
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.state = value;
    this.proxyValue();
    this.cdr.markForCheck();
  }

  private handleRadioChanges() {
    this.radios.forEach(radio => {
      radio.registerOnChange((checked: boolean) => {
        if (checked && radio.value !== this.state) {
          this.updateValue(radio.value);
        }
      });
    })
  }

  private proxyValue() {
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.writeValue(this.state);
      });
    }
  }
}
