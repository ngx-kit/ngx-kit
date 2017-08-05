import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentTag } from '../core/meta/tokens';

/**
 * @todo <tag-group>
 * @todo [closable]
 * @todo colors presets
 */
@Component({
  selector: 'kit-tag,[kitTag]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTagComponent implements OnInit {
  @Input() kitTag: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTag) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-tag';
    this.styler.register(this.style);
  }

  @Input()
  set color(color: string) {
    this.styler.host.applyState({color});
  };

  ngOnInit() {
  }
}
