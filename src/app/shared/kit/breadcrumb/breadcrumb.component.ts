import { Component, Input } from '@angular/core';
import { KitBreadcrumbItem } from '@ngx-kit/ngx-kit';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  @Input() content: Content;

  items: KitBreadcrumbItem[] = [
    {title: 'Root', link: ['/']},
    {title: 'Child', link: ['/']},
    {title: 'Childy', link: ['/']},
  ];
}
