import { Directive, HostListener, Optional } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive({
  // tslint:disable-next-line
  selector: '[kitFormTouch]',
})
export class KitFormTouchDirective {
  constructor(
    @Optional() private container: ControlContainer,
  ) {
  }

  @HostListener('click') clickHandler() {
    if (this.container) {
      this.formTouchAll((this.container.formDirective as any).form);
    } else {
      throw new Error('Use kitFormTouch inside NgForm or FormGroup');
    }
  }

  /**
   * Touches all FormGroup controls and controls in nested FormGroups at any level.
   */
  formTouchAll(form: FormGroup, revalidate?: boolean) {
    form.markAsTouched();
    for (const i in form.controls) {
      if (form.controls.hasOwnProperty(i)) {
        const control = form.controls[i];
        if (control) {
          control.markAsTouched();
          if (control instanceof FormGroup) {
            this.formTouchAll(control);
          } else if (revalidate) {
            control.setValue(control.value);
          }
        }
      }
    }
  }
}
