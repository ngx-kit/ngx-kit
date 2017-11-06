import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Form group component.
 *
 * @apiOrder 1
 */
@Component({
  selector: 'ui-form-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormGroupComponent {
}
