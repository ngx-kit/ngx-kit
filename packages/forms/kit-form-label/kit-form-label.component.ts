import { Component, Inject, OnInit } from '@angular/core';

import { kitComponentFormGroup, KitFormGroupStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-form-label',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitFormLabelComponent implements OnInit {

  constructor(private styler: StylerComponent,
              @Inject(kitComponentFormGroup) private style: KitFormGroupStyle) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
  }

}
