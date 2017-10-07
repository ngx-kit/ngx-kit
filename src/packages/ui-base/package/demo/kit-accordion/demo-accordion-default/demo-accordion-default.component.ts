import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-default',
  templateUrl: './demo-accordion-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAccordionDefaultComponent {
}
