import { Component, HostBinding, Inject, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentLayoutSide, KitComponentStyle } from '@ngx-kit/core';

@Component({
  selector: 'kit-layout-side',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutSideComponent implements OnInit {

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutSide) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
