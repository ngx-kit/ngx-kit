import { Directive, DoCheck, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { KitFormControlDirective } from '../kit-form-control/kit-form-control.directive';

/**
 * Structure directive for output errors.
 * Should be declared under `[kitFormControl]`
 *
 * ```html
 * <div [kitFormControl]="form.get('field')">
 *  <input type="text" formControlName="field">
 *  <span *kitFormError>
 *    <span *kitFormError="'required'">The Field is required</span>
 *    <span *kitFormError="'maxlength'">Please enter no more than 40 characters for the Field</span>
 * </span>
 * </div>
 * ```
 */
@Directive({
  selector: '[kitFormError]',
})
export class KitFormErrorDirective implements DoCheck {
  @Input() kitFormError: string | null;

  private viewRef: EmbeddedViewRef<any> | null = null;

  private display = false;

  constructor(private vcr: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private controlDirective: KitFormControlDirective) {
  }

  ngDoCheck() {
    // @todo subscribe on control value/status/touch/dirty observables
    // @todo (but currently there are no touch and dirty streams in reactive forms)
    this.checkDisplay();
  }

  private checkDisplay() {
    const display = this.kitFormError
        ? this.controlDirective.hasError(this.kitFormError)
        : this.controlDirective.hasErrors();
    if (this.display !== display) {
      this.display = display;
      this.updateView();
    }
  }

  private updateView() {
    if (this.display) {
      if (!this.viewRef) {
        this.vcr.clear();
        this.viewRef = this.vcr.createEmbeddedView(this.templateRef);
      }
    } else {
      this.vcr.clear();
      this.viewRef = null;
    }
  }
}
