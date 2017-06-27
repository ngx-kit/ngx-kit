import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentLayoutContent, KitComponentStyle } from '@ngx-kit/core';

@Component({
  selector: 'kit-layout-content,[kit-layout-content],[kitLayoutContent]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutContentComponent implements OnInit {

  @Input() kitLayoutContent: any;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutContent) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
