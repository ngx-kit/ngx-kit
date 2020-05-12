import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EvoFormControlDirective } from './evo-form-control.directive';

@Injectable()
export class EvoFormControl {
  private _controls: EvoFormControlDirective[] = [];

  private _focused = new BehaviorSubject<boolean>(false);

  get control(): EvoFormControlDirective {
    return this._controls[0];
  }

  get controls(): EvoFormControlDirective[] {
    return this._controls;
  }

  get focused() {
    return this._focused.value;
  }

  set focused(focused: boolean) {
    this._focused.next(focused);
  }

  get focusedChanges() {
    return this._focused.asObservable();
  }

  /**
   * Register KitNgControlDirective in the service.
   */
  add(control: EvoFormControlDirective) {
    this._controls.push(control);
  }

  remove(control: EvoFormControlDirective) {
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
