import { ChangeDetectionStrategy, Component, forwardRef, NgModule } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/core';

@NgModule({
  declarations: [forwardRef(() => UiAccordionPanelComponent)],
  exports: [forwardRef(() => UiAccordionPanelComponent)],
})
export class UiAccordionPanelModule {
}

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
