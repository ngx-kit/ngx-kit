import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

/**
 * @apiOrder 2
 */
@Component({
  selector: '<%= dasherize(name) %>-nav',
  template: '<ng-content></ng-content>',
  styleUrls: ['./<%= dasherize(name) %>-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>NavComponent {
  constructor() {
  }
}
