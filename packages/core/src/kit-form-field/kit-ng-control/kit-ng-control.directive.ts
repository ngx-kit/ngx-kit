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
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { uuid } from '../../util/uuid';
import { KitFormFieldService } from '../kit-form-field.service';

/**
 * Registers `control` in `KitFormFieldService`.
 *
 * Also generates unique _id (needed for correct working label in form-field).
 */
@Directive({
  // tslint:disable-next-line
  selector: '[ngModel],[formControl],[formControlName]',
})
export class KitNgControlDirective implements OnDestroy, DoCheck {
  @Input() required: boolean;

  private _id: string = uuid();

  private _errorStateChanges = new Subject<string[]>();

  private errorsDiffer: IterableDiffer<string>;

  constructor(
    @Host() @Optional() public ngControl: NgControl,
    @Optional() private formFieldService: KitFormFieldService,
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
