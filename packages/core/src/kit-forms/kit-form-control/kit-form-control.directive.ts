import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Controls input's [formControl] inside, provides state for another directives.
 */
@Directive({
  selector: '[kitFormControl]',
})
export class KitFormControlDirective {
  @Input() kitFormControl: FormControl;

  get control(): FormControl {
    return this.kitFormControl
  }

  hasError(name: string): boolean {
    return this.control.hasError(name);
  }

  hasErrors(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
}
