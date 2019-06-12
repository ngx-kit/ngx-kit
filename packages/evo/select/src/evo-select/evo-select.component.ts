import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoFocusListener } from '@ngx-kit/evo/focus-listener';
import { EvoFormControl } from '@ngx-kit/evo/form';
import { EvoSelect } from '../evo-select';
import { evoSelectIcons } from '../icons';
import { UiSelectFilter, UiSelectItem, UiSelectOptions, UiSelectSearchFn } from '../meta';

@Component({
  selector: 'evo-select',
  templateUrl: './evo-select.component.html',
  styleUrls: ['./evo-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EvoSelectComponent),
      multi: true,
    },
    EvoSelect,
    EvoFocusListener,
  ],
})
export class EvoSelectComponent<M> implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {
  /**
   * List of items to pick.
   */
  @Input() items: UiSelectItem<M>[] = [];

  /**
   * Use filter to search through the current list of `[items]`.
   */
  @Input() filter?: UiSelectFilter<M>;

  /**
   * Search function will be used instead of filter. The function should return list of items to pick.
   */
  @Input() searchFn?: UiSelectSearchFn<M>;

  /**
   * Enables multiple select.
   */
  @Input() multiple?: boolean;

  /**
   * Additional configuration.
   */
  @Input() options: Partial<UiSelectOptions> = {};

  /**
   * Placeholder displayed when model is empty.
   */
  @Input() placeholder?: string;

  @Input() icon?: string;

  @ViewChild('selectRef', {static: true}) selectRef: ElementRef;

  @ViewChild('inputRef', {static: true}) inputRef: ElementRef;

  hasErrors?: boolean;

  icons = evoSelectIcons;

  constructor(
    public service: EvoSelect<M>,
    @Optional() private formControl: EvoFormControl,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    // Handle error state
    if (this.formControl) {
      this.formControl.control.errorStateChanges.subscribe(errors => {
        this.hasErrors = !errors || errors.length > 0;
        this.cdr.detectChanges();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Proxy inputs to service
    if ('items' in changes) {
      this.service.state.items.next(this.items);
    }
    if ('filter' in changes) {
      this.service.filter = this.filter;
    }
    if ('searchFn' in changes) {
      this.service.searchFn = this.searchFn;
    }
    if ('multiple' in changes) {
      this.service.multiple = this.multiple;
    }
    if ('options' in changes) {
      this.service.overrideOptions(this.options);
    }
  }

  ngAfterViewInit() {
    // Initialization
    this.service.registerSelectRef(this.selectRef);
    this.service.initChangeDetection();
  }

  registerOnChange(fn: any) {
    this.service.registerOnChange(fn);
  }

  registerOnTouched(fn: any) {
    this.service.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.service.disabled = isDisabled;
  }

  writeValue(rawValue: M | M[]): void {
    this.service.writeValue(rawValue);
  }

  mousedown(event: any) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.service.mousedown(event);
    this.focusInput();
  }

  removeItem(event: any, model?: M) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.service.remove(model);
    this.focusInput();
  }

  select(model: M) {
    this.service.select(model);
    this.focusInput();
  }

  focusInput() {
    if (this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }

  isActive(model: M) {
    return this.service.active === model;
  }

  isChecked(model: M) {
    return this.service.model === model;
  }
}
