import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitPaginationService } from '../kit-pagination.service';

@Component({
  selector: 'kit-pagination',
  template: `
    pagination
  `,
})
export class KitPaginationComponent implements OnInit {

  @Input() total: number;
  @Input() current: number;
  @Input() onPage: number;

  @Input() pageLinksNumber = 4;
  @Input() displayNextLink: boolean = true;
  @Input() displayPrevLink: boolean = true;
  @Input() displayFirstLink: boolean = true;
  @Input() displayLastLink: boolean = true;

  @Output() pageChange = new EventEmitter<number>();

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitPaginationService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
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
