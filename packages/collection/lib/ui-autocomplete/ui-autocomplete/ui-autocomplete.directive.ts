import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isString, isUndefined, KitFocusListenerService, KitModelInterceptor, KitOverlayService, } from '@ngx-kit/core';
import { debounceTime, filter, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { KitOverlayComponentRef } from '../../../../core/src/kit-overlay/kit-overlay-component-ref';
import { UiAutocompleteOption, } from '../meta';
import { UiAutocompleteOptionsComponent } from '../ui-autocomplete-options/ui-autocomplete-options.component';

@Directive({
  selector: '[uiAutocomplete]',
  exportAs: 'uiAutocomplete',
  providers: [
    {
      provide: KitModelInterceptor,
      useExisting: forwardRef(() => UiAutocompleteDirective),
    },
    KitFocusListenerService,
  ],
})
export class UiAutocompleteDirective implements KitModelInterceptor, OnInit, OnChanges, OnDestroy {
  @Input() uiAutocomplete: void;

  /**
   * Array of options to suggest.
   */
  @Input() options: UiAutocompleteOption[];

  /**
   * `ngModel` will be updated only after option submit.
   */
  @Input() selectMode = false;

  /**
   * Emit `(search)` with current value on focus.
   */
  @Input() showOptionsOnFocus = false;

  /**
   * Delay for `(search)` output in milliseconds.
   */
  @Input() debounce = 0;

  /**
   * Custom option template.
   */
  @Input() optionTemplate: TemplateRef<any>;

  /**
   * Emits when user input a value.
   */
  @Output() search = new EventEmitter<string>();

  /**
   * Emits when user select an option.
   */
  @Output() select = new EventEmitter<UiAutocompleteOption>();

  @HostBinding('attr.autocomplete') autocompleteBinding = 'off';

  readonly viewStateChanges = new Subject<string>();

  readonly modelStateChanges = new Subject<any>();

  private optionsRef: KitOverlayComponentRef<UiAutocompleteOptionsComponent> | null;

  private selectedOption: number;

  private inputs = new Subject<string>();

  private changed = false;

  private focused = false;

  private viewState: string;

  private modelState: any;

  private destroy = new Subject<void>();

  constructor(
    private overlay: KitOverlayService,
    private elRef: ElementRef,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private focusListener: KitFocusListenerService,
  ) {
  }

  ngOnInit() {
    // Register in blur service
    this.focusListener.add(this.elRef.nativeElement);
    // Handle blur (the service helps to track focus of options list)
    this.focusListener.blur
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.focused = false;
        // Update state if no options has been selected
        if (this.changed && this.selectMode) {
          if (this.modelState && this.viewState) {
            // If field not clear, restore initial value
            this.checkViewState();
          } else {
            // Clean up states
            this.viewState = '';
            this.modelState = null;
            this.viewStateChanges.next(this.viewState);
            this.modelStateChanges.next(this.modelState);
          }
        }
        // Hide options
        if (this.optionsRef) {
          this.optionsRef.componentRef.destroy();
        }
        // Reset changed mark
        this.changed = false;
      });
    // `(search)` output emitter.
    this.inputs
      .pipe(
        debounceTime(this.debounce),
        filter(() => this.focused),
      )
      .subscribe(value => {
        this.search.emit(value);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      if (!this.changed) {
        this.checkViewState();
      }
      this.checkOptionsPopup();
      this.passOptions();
    }
    if ('optionTemplate' in changes) {
      if (this.optionsRef) {
        this.optionsRef.input({
          optionTemplate: this.optionTemplate,
        });
      }
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  @HostListener('keydown.arrowdown', ['$event']) arrowdownHandler(event: any) {
    if (this.optionsRef) {
      event.preventDefault();
      if (this.selectedOption < this.options.length - 1) {
        this.selectedOption++;
        this.optionsRef.input({selected: this.selectedOption});
      }
    }
  }

  @HostListener('keydown.arrowup', ['$event']) arrowupHandler(event: any) {
    if (this.optionsRef) {
      event.preventDefault();
      if (this.selectedOption > 0) {
        this.selectedOption--;
        this.optionsRef.input({selected: this.selectedOption});
      }
    }
  }

  @HostListener('keydown.enter', ['$event']) enterHandler(event: any) {
    if (this.optionsRef) {
      event.preventDefault();
      if (this.options && !isUndefined(this.options[this.selectedOption])) {
        this.selectOption(this.selectedOption);
      }
    }
  }

  @HostListener('keydown.esc') escHandler() {
    if (this.optionsRef) {
      this.optionsRef.componentRef.destroy();
    }
  }

  @HostListener('focus') focusHandler() {
    this.focused = true;
    if (this.showOptionsOnFocus) {
      this.changed = true;
      this.search.emit(this.viewState);
    }
  }

  /**
   * Handle input changing by user.
   */
  input(value: string, event: any) {
    this.inputs.next(value);
    this.changed = true;
    this.viewState = value;
    if (!this.selectMode) {
      this.modelState = value;
      this.modelStateChanges.next(value);
    }
  }

  keyDown(event: any) {
  }

  /**
   * Handle external modal changing.
   */
  writeValue(value: any) {
    this.modelState = value;
    this.checkViewState();
  }

  private selectOption(index: number) {
    const option = this.options[index];
    this.viewState = isString(option) ? option : option.label;
    this.modelState = isString(option) ? option : option.value;
    this.viewStateChanges.next(this.viewState);
    this.modelStateChanges.next(this.modelState);
    this.select.emit(option);
    this.changed = false;
    // close options popup
    if (this.optionsRef) {
      this.optionsRef.componentRef.destroy();
    }
    this.cdr.detectChanges();
  }

  private checkViewState() {
    // request options for correct label displaying
    const option = this.options && this.options.length > 0
      ? this.options.find(o => isString(o) ? o === this.modelState : o.value === this.modelState)
      : null;
    this.viewState = option ? isString(option) ? option : option.label : this.viewState;
    this.viewStateChanges.next(this.viewState);
  }

  private checkOptionsPopup() {
    if (this.optionsRef) {
      // check if need to hide
      if (!this.changed || (!this.options || this.options.length === 0)) {
        this.optionsRef.componentRef.destroy();
      }
    } else {
      // check if need to show
      if (this.changed && this.options && this.options.length > 0) {
        this.showOptions();
      }
    }
  }

  private showOptions() {
    if (!this.optionsRef) {
      this.optionsRef = this.overlay.hostComponent({
        component: UiAutocompleteOptionsComponent,
        viewContainerRef: this.vcr,
      });
      if (this.optionsRef) {
        this.optionsRef.input({anchor: this.elRef.nativeElement});
        // handle destroy
        this.optionsRef.componentRef.onDestroy(() => {
          this.optionsRef = null;
        });
        // handle select
        this.optionsRef.componentRef.instance.select
          .pipe(take(1))
          .subscribe(index => {
            this.selectOption(index);
          });
        this.passOptions();
      }
    }
  }

  private passOptions() {
    if (this.optionsRef) {
      this.optionsRef.input({
        options: this.options,
        selected: this.selectedOption = 0,
        optionTemplate: this.optionTemplate,
      });
    }
  }
}
