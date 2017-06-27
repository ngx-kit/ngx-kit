import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { KitBreadcrumbItem } from '../interfaces';

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

  @Input() kitBreadcrumb: any;

  @Input() items: KitBreadcrumbItem[];
  @Input() delimiter = '/';

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
