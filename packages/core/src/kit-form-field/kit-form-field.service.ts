import { Injectable } from '@angular/core';
import { isUndefined } from '../util/is-undefined';
import { KitNgControlDirective } from './kit-ng-control/kit-ng-control.directive';

@Injectable()
export class KitFormFieldService {
  private _controls: KitNgControlDirective[] = [];

  get control(): KitNgControlDirective {
    return this._controls[0];
  }

  get controls(): KitNgControlDirective[] {
    return this._controls;
  }

  /**
   * Register KitNgControlDirective in the service.
   */
  add(control: KitNgControlDirective) {
    this._controls.push(control);
  }

  remove(control: KitNgControlDirective) {
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
    return this.control && !(isUndefined(this.control.required) || this.control.required === false);
  }
}
