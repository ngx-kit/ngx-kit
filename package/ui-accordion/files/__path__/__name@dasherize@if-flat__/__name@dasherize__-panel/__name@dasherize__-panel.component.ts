import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/ngx-kit';

/**
 * Accordion panel.
 *
 * @apiOrder 2
 */
@Component({
  selector: '<%= dasherize(name) %>-panel',
  template: '<ng-content></ng-content>',
  styleUrls: ['./<%= dasherize(name) %>-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class <%= classify(name) %>PanelComponent {
}
