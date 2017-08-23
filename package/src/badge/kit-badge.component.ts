import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentBadge } from '../core/meta/tokens';
import { KitBadgePosition } from './meta';

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
export class KitBadgeComponent implements OnInit, OnChanges {
  @Input() color: string;

  @Input() count: number;

  @Input() kitBadge: any;

  @Input() position: KitBadgePosition = 'inline';

  @Input() size: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentBadge) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-badge';
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.styler.host.applyState({
      color: this.color,
      size: this.size,
      position: this.position,
    });
  }

  ngOnInit() {
  }
}
