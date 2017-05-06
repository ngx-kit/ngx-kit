import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitBreadcrumbService } from '../kit-breadcrumb.service';
import { KitBreadcrumbItem } from '../interfaces';

@Component({
  selector: 'kit-breadcrumb',
  template: `
    <span *ngFor="let item of items; let l = last">
      <a [routerLink]="item.link">{{ item.title }}</a>
      <span *ngIf="!l">{{ delimiter }}</span>
    </span>
  `,
})
export class KitBreadcrumbComponent implements OnInit {

  @Input() items: KitBreadcrumbItem[];
  @Input() delimiter = '/';

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitBreadcrumbService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
    console.log('items', this.items);
  }

  private compileStyles() {
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.host.base,
    );
  }

}
