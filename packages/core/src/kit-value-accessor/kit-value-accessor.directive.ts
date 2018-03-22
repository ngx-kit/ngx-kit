import { Directive, ElementRef, forwardRef, HostListener, Inject, Optional, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { KitDefaultModelInterceptor } from './kit-default-model-interceptor';
import { KitModelInterceptor } from './kit-model-interceptor';

/**
 * Service directive, injects middleware.
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

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(KitModelInterceptor) @Optional() private injInterceptor: KitModelInterceptor,
    private defaultInterceptor: KitDefaultModelInterceptor,
  ) {
    this.interceptor = this.injInterceptor || this.defaultInterceptor;
    this.interceptor.modelStateChanges.subscribe(this.changes$);
    this.interceptor.viewStateChanges.subscribe(value => {
      this.renderer.setProperty(this.el.nativeElement, 'value', value || '');
    });
  }

  @HostListener('input', ['$event'])
  inputHandler(event: any) {
    this.interceptor.input(event.target.value, event);
  }

  @HostListener('keydown', ['$event'])
  keydownHandler(event: any) {
    this.interceptor.keyDown(event);
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
