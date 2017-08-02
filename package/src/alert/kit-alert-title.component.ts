import { Component, Inject } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentAlertTitle } from '../core/meta/tokens';

@Component({
  selector: 'kit-alert-title,[kitAlertTitle]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitAlertTitleComponent {
  constructor(private styler: StylerComponent,
              @Inject(kitComponentAlertTitle) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  applyHostState(color: string) {
    this.styler.host.applyState({color});
  }
}
