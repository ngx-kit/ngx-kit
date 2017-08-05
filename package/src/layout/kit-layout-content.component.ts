import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentLayoutContent } from '../core/meta/tokens';

@Component({
  selector: 'kit-layout-content,[kitLayoutContent]',
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
    this.styler.classPrefix = 'kit-layout-content';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
