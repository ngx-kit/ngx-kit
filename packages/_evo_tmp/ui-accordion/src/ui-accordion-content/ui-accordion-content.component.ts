import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, NgModule } from '@angular/core';

@NgModule({
  declarations: [forwardRef(() => UiAccordionContentComponent)],
  exports: [forwardRef(() => UiAccordionContentComponent)],
})
export class UiAccordionContentModule {
}

/**
 * Accordion content holder.
 */
@Component({
  selector: 'ui-accordion-content',
  template: `
    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-accordion-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({height: 0}),
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({height: '*'})),
      ]),
      transition(':leave', [
        style({height: '*'}),
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({height: 0})),
      ]),
    ]),
  ],
})
export class UiAccordionContentComponent {
  @HostBinding('@collapse') collapseTrigger = true;
}
