import { Component, Inject, Input, OnInit } from '@angular/core';
import { kitComponentLayoutContent, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

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

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutContent) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
