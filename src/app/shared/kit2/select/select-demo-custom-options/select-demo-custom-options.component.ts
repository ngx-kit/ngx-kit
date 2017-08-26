import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-select-demo-custom-options',
  templateUrl: './select-demo-custom-options.component.html',
})
export class SelectDemoCustomOptionsComponent {
  options = [
    {
      id: '123',
      text: '123-label',
    },
    {
      id: '456',
      text: '456-label',
    },
    {
      id: '789',
      text: '789-label',
    },
    {
      id: 'abc',
      text: 'abc-label',
    },
  ];

  selected = '123';
}
