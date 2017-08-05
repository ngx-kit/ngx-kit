import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentFormError } from '../core/meta/tokens';
import { KitFormGroupComponent } from './kit-form-group.component';

/**
 * @todo default [touched], [dirty] via DI
 */
@Component({
  selector: 'kit-form-error,[kitFormError]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitFormErrorComponent implements OnInit, AfterViewInit {
  @Input() dirty: boolean | null = null;

  @Input() kitFormError: any;

  @Input() touched: boolean | null = null;

  @Input() validator: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentFormError) private style: KitComponentStyle,
              private formGroup: KitFormGroupComponent) {
    this.styler.classPrefix = 'kit-form-error';
    this.styler.register(this.style);
  }

  ngAfterViewInit() {
    if (!this.validator) {
      throw new Error('kit-form-error: validator attribute is required!');
    }
  }

  ngOnInit() {
  }

  init() {
    this.formGroup.statusChanges.subscribe(status => {
      const hasError = this.formGroup.hasError(this.validator);
      // proxy touched & dirty to form-group
      const touched = this.touched === null ? this.formGroup.touched : this.touched;
      const dirty = this.dirty === null ? this.formGroup.dirty : this.dirty;
      // ident visibility
      const visible = hasError && (!touched || status.touched) && (!dirty || status.dirty);
      // apply state
      this.styler.host.applyState({visible});
    });
  }
}
