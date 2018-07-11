import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/core';

/**
 * Accordion panel.
 */
@Component({
  selector: 'ui-accordion-panel',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-accordion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiAccordionPanelComponent {
}
