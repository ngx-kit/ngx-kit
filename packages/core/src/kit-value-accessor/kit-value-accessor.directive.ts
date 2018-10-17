import { Directive, ElementRef, forwardRef, HostListener, Inject, Optional, Renderer2, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { KitDefaultModelInterceptor } from './kit-default-model-interceptor';
import { KitModelInterceptor } from './kit-model-interceptor';

/**
 * Service directive, injects middleware.
 *
 * Allows to intercept in communication between html `input` and `ngModel`.
 *
 *
 * ### Examples
 *
 * * collection:autocomplete -
 * [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-autocomplete),
 * [demo](http://ngx-kit.com/collection/module/ui-autocomplete)
 */
@Directive({
  // tslint:disable-next-line
  selector: `
    input:not([type=checkbox]):not([type=radio])[formControlName],
    textarea[formControlName],
    input:not([type=checkbox]):not([type=radio])[formControl],
    textarea[formControl],
    input:not([type=checkbox]):not([type=radio])[ngModel],
    textarea[ngModel],
    [ngDefaultControl]
  `,
  providers: [
    KitDefaultModelInterceptor,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KitValueAccessorDirective),
      multi: true,
    },
  ],
})
// tslint:disable-next-line
export class KitValueAccessorDirective implements ControlValueAccessor {
  private changes$ = new Subject<string>();

  private touches$ = new Subject<void>();

  private interceptor: KitModelInterceptor;

  private lastView = '';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(KitModelInterceptor) @Self() @Optional() private injInterceptor: KitModelInterceptor,
    private defaultInterceptor: KitDefaultModelInterceptor,
  ) {
    this.interceptor = this.injInterceptor || this.defaultInterceptor;
    this.interceptor.modelStateChanges.subscribe(this.changes$);
    this.interceptor.viewStateChanges.subscribe((value: any) => {
      const stringValue = value ? value + '' : '';
      // Setup lastView to avoid unnecessary input emits
      this.lastView = stringValue;
      this.renderer.setProperty(this.el.nativeElement, 'value', stringValue);
    });
  }

  @HostListener('input', ['$event'])
  inputHandler(event: any) {
    const value = event.target.value + '';
    // Emit input event if lastView changed
    if (value !== this.lastView) {
      this.lastView = value;
      this.interceptor.input(value, event);
    }
  }

  @HostListener('keydown', ['$event'])
  keydownHandler(event: any) {
    this.interceptor.keyDown(event);
  }

  @HostListener('blur', ['$event'])
  blurHandler(event: any) {
    this.touches$.next();
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }

  writeValue(rawValue: any): void {
    this.interceptor.writeValue(rawValue);
  }
}
