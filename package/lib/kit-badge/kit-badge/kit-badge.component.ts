import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';
import { KitBadgeColor, KitBadgePosition, KitBadgeSize } from '../meta';

/**
 * @todo overflowCount - max count
 * @todo showZero
 */
@Component({
  selector: 'kit-badge',
  template: `
    {{ count }}
  `,
  styleUrls: ['./kit-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KitClassService],
})
export class KitBadgeComponent implements OnInit, OnChanges {
  @Input() color: KitBadgeColor = 'default';

  /**
   * Number displayed on badge.
   */
  @Input() count: number;

  /**
   * If use corner position, do not forget to set relative position to parent.
   */
  @Input() position: KitBadgePosition = 'inline';

  @Input() size: KitBadgeSize = 'm';

  constructor(private kitClass: KitClassService) {
  }

  ngOnChanges() {
    this.kitClass.apply({
      size: this.size,
      position: this.position,
      color: this.color,
    });
  }

  ngOnInit() {
  }
}
