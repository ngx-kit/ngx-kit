import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitLayoutHeaderStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-layout-header,[kitLayoutHeader]',
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
              @Inject(kitLayoutHeaderStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-layout-header';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
