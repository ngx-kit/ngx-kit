import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { kitComponentFormError, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

import { KitFormGroupComponent } from '../kit-form-group/kit-form-group.component';

/**
 * @todo default [touched], [dirty] via DI
 */
@Component({
  selector: 'kit-form-error',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitFormErrorComponent implements OnInit, AfterViewInit {

  @Input() validator: string;
  @Input() touched: boolean | null = null;
  @Input() dirty: boolean | null = null;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  }

  constructor(private styler: StylerComponent,
              @Inject(kitComponentFormError) private style: KitComponentStyle,
              private formGroup: KitFormGroupComponent) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.validator) {
      throw new Error('kit-form-error: validator attribute is required!');
    }
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
