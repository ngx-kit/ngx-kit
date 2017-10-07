import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'kit-tabs-nav,[kitTabsNav]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-tabs-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsNavComponent {
  @Input() kitTabsNav: void;

  constructor() {
  }
}
