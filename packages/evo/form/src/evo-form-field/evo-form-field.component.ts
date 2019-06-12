import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EvoFormErrorDirective } from '../evo-form-error/evo-form-error.directive';
import { EvoFormControl } from '../evo-form-control/evo-form-control';

@Component({
  selector: 'evo-form-field',
  templateUrl: './evo-form-field.component.html',
  styleUrls: ['./evo-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EvoFormControl,
  ],
  animations: [
    trigger('error', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-10%)',
        }),
        animate('250ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        animate('150ms', style({
          opacity: 0,
          transform: 'scale(1.05)',
        })),
      ]),
    ]),
  ],
})
export class EvoFormFieldComponent implements OnInit {
  @Input() label: string;

  /**
   * Display required sign after label.
   */
  @Input() required: boolean;

  @ContentChild(NgControl, {static: true}) ngControl: NgControl;

  @ContentChildren(EvoFormErrorDirective) errorRefs: QueryList<EvoFormErrorDirective>;

  errors: string[];

  constructor(
    public formFieldService: EvoFormControl,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    if (this.formFieldService.control) {
      this.formFieldService.control.errorStateChanges.subscribe(errors => {
        this.errors = errors;
        this.cdr.detectChanges();
      });
    }
  }

  hasError(name: string): boolean {
    return this.errors.indexOf(name) !== -1;
  }
}
