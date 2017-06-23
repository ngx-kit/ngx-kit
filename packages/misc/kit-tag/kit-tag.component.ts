import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle, kitComponentTag } from '@ngx-kit/core';

/**
 * @todo <tag-group>
 * @todo [closable]
 * @todo colors presets
 */
@Component({
  selector: 'kit-tag',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTagComponent implements OnInit {

  @Input() set color(color: string) {
    this.styleBackgroundColor = color;
    this.styleBorderColor = color;
  };

  @Input() set textColor(color: string) {
    this.styleColor = color;
  };

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  @HostBinding('style.backgroundColor') styleBackgroundColor: string;
  @HostBinding('style.borderColor') styleBorderColor: string;
  @HostBinding('style.color') styleColor: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTag) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
