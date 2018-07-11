import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, } from '@angular/core';
import { KitRefDirective } from '@ngx-kit/core';

/**
 * Main breadcrumbs component.
 */
@Component({
  selector: 'ui-breadcrumbs',
  templateUrl: './ui-breadcrumbs.component.html',
  styleUrls: ['./ui-breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBreadcrumbsComponent {
  @ContentChildren(KitRefDirective) items: QueryList<KitRefDirective>;

  constructor() {
  }
}
