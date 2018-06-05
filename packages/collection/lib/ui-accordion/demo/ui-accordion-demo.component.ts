import { Component } from '@angular/core';

@Component({
  templateUrl: './ui-accordion-demo.component.html',
})
export class UiAccordionDemoComponent {
  panels = [
    {title: 'Panel 1', content: 'Panel 1 content'},
    {title: 'Panel 2', content: 'Panel 2 content'},
    {title: 'Panel 3', content: 'Panel 3 content'},
  ];
}
