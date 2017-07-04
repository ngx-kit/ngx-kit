import { Component, Inject, Input, OnInit } from '@angular/core';
import { kitComponentLayoutSide, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-layout-side,[kit-layout-side],[kitLayoutSide]',
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
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
