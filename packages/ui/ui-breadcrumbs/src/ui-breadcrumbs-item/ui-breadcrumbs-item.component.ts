import { Component, Input } from '@angular/core';

/**
 * Breadcrumbs item.
 */
@Component({
  selector: 'ui-breadcrumbs-item,[uiBreadcrumbsItem]',
  templateUrl: './ui-breadcrumbs-item.component.html',
  styleUrls: ['./ui-breadcrumbs-item.component.scss'],
})
export class UiBreadcrumbsItemComponent {
  @Input() icon: string;
}
