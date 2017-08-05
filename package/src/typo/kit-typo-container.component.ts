import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentTypoContainer } from '../core/meta/tokens';

@Component({
  selector: 'kit-typo-container,[kitTypoContainer]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTypoContainerComponent implements OnInit {
  @Input() kitTypoContainer: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTypoContainer) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-typo-container';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
