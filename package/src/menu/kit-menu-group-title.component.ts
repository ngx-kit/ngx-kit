import { Component, Inject, Input, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuGroupTitleStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-menu-group-title,[kitMenuGroupTitle]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuGroupTitleComponent implements OnInit {
  @Input() kitMenuGroupTitle: any;

  constructor(private styler: StylerComponent,
              @Inject(kitMenuGroupTitleStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-menu-group-title';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
