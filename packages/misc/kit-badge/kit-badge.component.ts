import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentBadge, KitComponentStyle } from '@ngx-kit/core';

/**
 * @todo overflowCount - max count
 * @todo showZero
 */
@Component({
  selector: 'kit-badge',
  template: `
    {{ count }}
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitBadgeComponent implements OnInit {

  @Input() set type(type: string) {
    this.styler.host.applyState({type});
  };

  @Input() set size(size: string) {
    this.styler.host.applyState({size});
  }

  @Input() count: number;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentBadge) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
