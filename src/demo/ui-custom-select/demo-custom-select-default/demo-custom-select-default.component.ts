import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-custom-select-default',
  templateUrl: './demo-custom-select-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCustomSelectDefaultComponent {
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
