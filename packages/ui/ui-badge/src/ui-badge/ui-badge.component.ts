import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/core';
import { UiBadgeColor, UiBadgePosition, UiBadgeSize } from '../meta';

/**
 * @todo overflowCount - max count
 * @todo showZero
 */
@Component({
  selector: 'ui-badge',
  template: `
    {{ count }}
  `,
  styleUrls: ['./ui-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KitClassService],
})
export class UiBadgeComponent implements OnInit, OnChanges {
  @Input() color: UiBadgeColor = 'default';

  /**
   * Number displayed on badge.
   */
  @Input() count: number;

  /**
   * If use corner position, do not forget to set relative position to parent.
   */
  @Input() position: UiBadgePosition = 'inline';

  @Input() size: UiBadgeSize = 'm';

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
