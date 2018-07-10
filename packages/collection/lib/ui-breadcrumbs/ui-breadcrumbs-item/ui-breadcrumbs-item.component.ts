import { Component, } from '@angular/core';

/**
 * Breadcrumbs item.
 */
@Component({
  selector: 'ui-breadcrumbs-item,[uiBreadcrumbsItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-breadcrumbs-item.component.scss'],
})
export class UiBreadcrumbsItemComponent {
}
