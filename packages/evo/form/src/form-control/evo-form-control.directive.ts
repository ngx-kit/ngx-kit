import {
  Directive, DoCheck,
  Host,
  HostBinding, HostListener,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnDestroy,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { evoUuid } from '@ngx-kit/evo/util';
import { Observable, Subject } from 'rxjs';
import { EvoFormControl } from './evo-form-control';

/**
 * Registers `control` in `FormFieldService`.
 *
 * Also generates unique _id (needed for correct working label in form-field).
 */
@Directive({
  // tslint:disable-next-line
  selector: '[ngModel],[formControl],[formControlName]',
})
export class EvoFormControlDirective implements OnDestroy, DoCheck {
  @Input() required: boolean;

  private _id: string = evoUuid();

  private _errorStateChanges = new Subject<string[]>();

  private errorsDiffer: IterableDiffer<string>;

  constructor(
    @Host() @Optional() public ngControl: NgControl,
    @Optional() private formControl: EvoFormControl,
    private differs: IterableDiffers,
  ) {
    if (this.ngControl && this.formControl) {
      this.formControl.add(this);
    }
  }

  @HostBinding('attr.id') get idBinding(): string {
    return this._id;
  }

  @HostListener('focus') onFocus() {
    if (this.formControl) {
      this.formControl.focused = true;
    }
  }

  @HostListener('blur') onBlur() {
    if (this.formControl) {
      this.formControl.focused = false;
    }
  }

  get id(): string {
    return this._id;
  }

  @Input() set id(id: string) {
    this._id = id;
  }

  get errorStateChanges(): Observable<string[]> {
    return this._errorStateChanges.asObservable();
  }

  ngOnDestroy() {
    if (this.formControl) {
      this.formControl.remove(this);
    }
  }

  ngDoCheck() {
    if (this.formControl) {
      const errors = this.formControl.getErrorsToDisplay();
      if (errors && !this.errorsDiffer) {
        this.errorsDiffer = this.differs.find(errors).create();
        this._errorStateChanges.next(errors);
      }
      if (this.errorsDiffer) {
        const diff = this.errorsDiffer.diff(errors);
        if (diff) {
          this._errorStateChanges.next(errors);
        }
      }
    }
  }
}
