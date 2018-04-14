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
import { KitFormErrorDirective, KitFormFieldService } from '@ngx-kit/core';

@Component({
  selector: 'ui-form-field',
  templateUrl: './ui-form-field.component.html',
  styleUrls: ['./ui-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitFormFieldService,
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
export class UiFormFieldComponent implements OnInit {
  @Input() label: string;

  /**
   * Display required sign after label.
   */
  @Input() required: boolean;

  @ContentChild(NgControl) ngControl: NgControl;

  @ContentChildren(KitFormErrorDirective) errorRefs: QueryList<KitFormErrorDirective>;

  errors: string[];

  constructor(
    public formFieldService: KitFormFieldService,
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
