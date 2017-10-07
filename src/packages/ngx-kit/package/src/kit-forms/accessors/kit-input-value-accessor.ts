import { Directive, ElementRef, forwardRef, HostListener, Inject, Optional, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { KitInputMiddleware, kitInputMiddleware } from '../meta';

export const KIT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitInputValueAccessor),
  multi: true,
};

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
  providers: [KIT_INPUT_VALUE_ACCESSOR],
})
// tslint:disable-next-line
export class KitInputValueAccessor implements ControlValueAccessor {
  private changes$ = new Subject<string>();

  private state: any;

  private touches$ = new Subject<void>();

  constructor(private renderer: Renderer2,
              private el: ElementRef,
              @Inject(kitInputMiddleware) @Optional() private mids: KitInputMiddleware[]) {
  }

  @HostListener('input', ['$event.target.value'])
  inputHandler(rawValue: any) {
    this.updateState(rawValue);
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
    const transformed = this.transform(rawValue);
    if (rawValue === transformed) {
      this.renderer.setProperty(this.el.nativeElement, 'value', rawValue || '');
    }
  }

  private transform(rawValue: any): any {
    return this.mids
        ? this.mids
            .filter(m => m.enabled)
            .reduce((prev, curr) => {
              return curr.transform(prev, this.el.nativeElement);
            }, rawValue)
        : rawValue;
  }

  private updateState(rawValue: any) {
    const value = this.transform(rawValue);
    if (this.state !== value) {
      this.state = value;
      this.changes$.next(this.state);
    }
  }
}
