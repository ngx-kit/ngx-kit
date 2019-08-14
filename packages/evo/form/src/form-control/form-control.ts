import { Injectable } from '@angular/core';
import { FormControlDirective } from './form-control.directive';

@Injectable()
export class FormControl {
  private _controls: FormControlDirective[] = [];

  get control(): FormControlDirective {
    return this._controls[0];
  }

  get controls(): FormControlDirective[] {
    return this._controls;
  }

  /**
   * Register KitNgControlDirective in the service.
   */
  add(control: FormControlDirective) {
    this._controls.push(control);
  }

  remove(control: FormControlDirective) {
    const index = this._controls.indexOf(control);
    if (index !== -1) {
      this._controls.splice(index, 1);
    }
  }

  /**
   * Check if error exists.
   */
  hasError(name: string) {
    return !!this._controls.find(c => c.ngControl.hasError(name));
  }

  /**
   * Has any error and control touched or dirty.
   */
  getErrorsToDisplay(): string[] {
    let errors: string[] = [];
    this._controls.forEach(control => {
      const hasErrors = control.ngControl.invalid && control.ngControl.touched;
      if (hasErrors) {
        errors = [...errors, ...Object.keys(control.ngControl.errors || {})];
      }
    });
    return errors;
  }

  /**
   * Is main control required.
   */
  isRequired(): boolean {
    return this.control && !(typeof this.control.required === 'undefined' || this.control.required === false);
  }
}
