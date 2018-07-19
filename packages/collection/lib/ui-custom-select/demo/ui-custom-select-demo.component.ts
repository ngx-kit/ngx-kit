import { Component } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-custom-select-demo.component.html',
})
export class UiCustomSelectDemoComponent {
  model = 1;

  options = [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      label: 'Option 3',
      value: 3,
    },
    {
      label: 'Option 4',
      value: 4,
    },
  ];
}
