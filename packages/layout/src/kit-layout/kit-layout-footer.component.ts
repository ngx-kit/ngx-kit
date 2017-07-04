import { Component, Inject, Input, OnInit } from '@angular/core';
import { kitComponentLayoutFooter, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-layout-footer,[kit-layout-footer],[kitLayoutFooter]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutFooterComponent implements OnInit {
  @Input() kitLayoutFooter: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutFooter) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
