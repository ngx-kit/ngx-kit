import {
  Directive, DoCheck,
  Host,
  HostBinding,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnDestroy,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { uuid } from '@ngx-kit/evo/util';
import { Observable, Subject } from 'rxjs';
import { EvoFormControl } from './evo-form-control';

/**
 * Registers `control` in `EvoFormFieldService`.
 *
 * Also generates unique _id (needed for correct working label in form-field).
 */
@Directive({
  // tslint:disable-next-line
  selector: '[ngModel],[formControl],[formControlName]',
})
export class EvoFormControlDirective implements OnDestroy, DoCheck {
  @Input() required: boolean;

  private _id: string = uuid();

  private _errorStateChanges = new Subject<string[]>();

  private errorsDiffer: IterableDiffer<string>;

  constructor(
    @Host() @Optional() public ngControl: NgControl,
    @Optional() private formFieldService: EvoFormControl,
    private differs: IterableDiffers,
  ) {
    if (this.ngControl && this.formFieldService) {
      this.formFieldService.add(this);
    }
  }

  @HostBinding('attr.id') get idBinding(): string {
    return this._id;
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
    if (this.formFieldService) {
      this.formFieldService.remove(this);
    }
  }

  ngDoCheck() {
    if (this.formFieldService) {
      const errors = this.formFieldService.getErrorsToDisplay();
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
