import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-gen',
  templateUrl: './demo-accordion-gen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAccordionGenComponent {
  panels = [
    {title: 'Panel 1', content: 'Panel 1 content'},
    {title: 'Panel 2', content: 'Panel 2 content'},
    {title: 'Panel 3', content: 'Panel 3 content'},
  ];
}
