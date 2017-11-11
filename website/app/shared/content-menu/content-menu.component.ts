import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss'],
})
export class ContentMenuComponent implements OnChanges {
  @Input() content: any;

  ngOnChanges() {
    this.content.docs.sort((x: any, y: any) => {
      const xOrder = x.meta.apiOrder || null;
      const yOrder = y.meta.apiOrder || null;
      return xOrder > yOrder ? 1 : -1;
    });
  }
}
