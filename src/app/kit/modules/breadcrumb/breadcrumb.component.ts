import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitBreadcrumbItem } from '@ngx-kit/ngx-kit';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  content: Content;

  items: KitBreadcrumbItem[] = [
    {title: 'Root', link: ['/']},
    {title: 'Child', link: ['/']},
    {title: 'Childy', link: ['/']},
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
