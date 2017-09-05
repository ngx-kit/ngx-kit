import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponent, KitComponentStyle } from '../core/meta/component';
import { kitBadgeStyle } from '../core/meta/tokens';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitBadgeComponent implements KitComponent, OnInit, OnChanges {
  /**
   * Number displayed on badge.
   */
  @Input() count: number;

  @Input() kitBadge: null;

  /**
   * If use corner position, do not forget to set relative position to parent.
   */
  @Input() position: KitBadgePosition = 'inline';

  @Input() size: string;

  constructor(public readonly styler: StylerComponent,
              @Inject(kitBadgeStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-badge';
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.styler.host.applyState({
      size: this.size,
      position: this.position,
    });
  }

  ngOnInit() {
  }
}
