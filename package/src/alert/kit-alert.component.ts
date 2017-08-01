import { Component, Inject, Input, OnChanges } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentAlert } from '../core/meta/tokens';

@Component({
  selector: 'kit-alert,[kitAlert]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitAlertComponent implements OnChanges {
  @Input() color: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAlert) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.styler.host.state = {
      color: this.color,
    };
  }
}
