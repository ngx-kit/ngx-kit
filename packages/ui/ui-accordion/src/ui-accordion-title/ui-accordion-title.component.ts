import { ChangeDetectionStrategy, Component, HostListener, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/core';

/**
 * Accordion title.
 */
@Component({
  selector: 'ui-accordion-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-accordion-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAccordionTitleComponent {
  constructor(private item: KitCollapseItemService) {
  }

  @HostListener('click')
  clickHandler() {
    this.item.toggle();
  }
}
