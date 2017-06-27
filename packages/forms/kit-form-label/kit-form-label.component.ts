import { Component, Inject, Input, OnInit } from '@angular/core';

import { kitComponentFormGroup, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-form-label,[kit-form-label],[kitFormLabel]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitFormLabelComponent implements OnInit {

  @Input() kitFormLabel: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentFormGroup) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
