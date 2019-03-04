import { ChangeDetectionStrategy, Component, } from '@angular/core';

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
