import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitAlertTitleStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-alert-title,[kitAlertTitle]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAlertTitleComponent {
  constructor(private styler: StylerComponent,
              @Inject(kitAlertTitleStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-title';
    this.styler.register(this.style);
  }

  applyHostState(color: string) {
    this.styler.host.applyState({color});
  }
}
