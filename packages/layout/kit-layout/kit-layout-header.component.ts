import { Component, Inject, Input, OnInit } from '@angular/core';
import { kitComponentLayoutHeader, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-layout-header,[kit-layout-header],[kitLayoutHeader]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutHeaderComponent implements OnInit {
  @Input() kitLayoutHeader: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutHeader) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
