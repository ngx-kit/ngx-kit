import { Component, } from '@angular/core';

/**
 * Breadcrumbs item.
 *
 * @apiOrder 2
 */
@Component({
  selector: 'ui-breadcrumbs-item,[uiBreadcrumbsItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-breadcrumbs-item.component.scss'],
})
export class UiBreadcrumbsItemComponent {
}
