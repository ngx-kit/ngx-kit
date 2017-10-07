import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-first',
  templateUrl: './demo-accordion-first.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAccordionFirstComponent {
}
