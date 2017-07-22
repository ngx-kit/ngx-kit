import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { KitBreadcrumbItem } from './meta';

@Component({
  selector: 'kit-breadcrumb,[kit-breadcrumb],[kitBreadcrumb]',
  template: `
    <span *ngFor="let item of items; let l = last">
      <!--<a [routerLink]="item.link">{{ item.title }}</a>-->
      <!--<span *ngIf="!l">{{ delimiter }}</span>-->
    </span>
  `,
})
export class KitBreadcrumbComponent implements OnInit {
  @Input() delimiter = '/';

  @HostBinding('class') hostClass: string;

  @Input() items: KitBreadcrumbItem[];

  @Input() kitBreadcrumb: any;

  constructor() {
  }

  ngOnInit() {
  }
}
