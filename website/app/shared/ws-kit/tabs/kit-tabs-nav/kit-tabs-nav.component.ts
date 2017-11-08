import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'ws-kit-tabs-nav,[wsKitTabsNav]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-tabs-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsNavComponent {
  @Input() kitTabsNav: void;

  constructor() {
  }
}
