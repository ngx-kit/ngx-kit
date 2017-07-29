import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentLayoutHeader } from '../core/meta/tokens';

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
              @Inject(kitComponentLayoutHeader) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
