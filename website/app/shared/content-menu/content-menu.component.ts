import { Component, Input, OnChanges } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { ContentMenuStyle } from './content-menu.style';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  viewProviders: [
    StylerModule.forComponent(ContentMenuStyle),
  ],
})
export class ContentMenuComponent implements OnChanges {
  @Input() content: any;

  constructor(private styler: StylerComponent) {
  }

  ngOnChanges() {
    this.content.docs.sort((x, y) => {
      const xOrder = x.meta.apiOrder || null;
      const yOrder = y.meta.apiOrder || null;
      return xOrder > yOrder ? 1 : -1;
    });
  }
}
