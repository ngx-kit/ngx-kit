import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentBadge } from '../core/meta/tokens';

/**
 * @todo overflowCount - max count
 * @todo showZero
 */
@Component({
  selector: 'kit-badge,[kitBadge]',
  template: `
    {{ count }}
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitBadgeComponent implements OnInit {
  @Input() count: number;

  @Input() kitBadge: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentBadge) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set color(color: string) {
    this.styler.host.applyState({color});
  };

  @Input()
  set size(size: string) {
    this.styler.host.applyState({size});
  }

  ngOnInit() {
  }
}
