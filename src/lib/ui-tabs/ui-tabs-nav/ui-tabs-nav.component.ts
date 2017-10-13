import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'ui-tabs-nav',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-tabs-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabsNavComponent {
  constructor() {
  }
}
