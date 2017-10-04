import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/ngx-kit';

/**
 * Accordion panel.
 *
 * @apiOrder 2
 */
@Component({
  selector: 'kit-accordion-panel,[kitAccordionPanel]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-accordion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class KitAccordionPanelComponent {
  @Input() kitAccordionPanel: void;
}
