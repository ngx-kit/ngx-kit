import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentLayoutSide } from '../core/meta/tokens';

@Component({
  selector: 'kit-layout-side,[kitLayoutSide]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutSideComponent implements OnInit {
  @Input() kitLayoutSide: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutSide) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-layout-side';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
