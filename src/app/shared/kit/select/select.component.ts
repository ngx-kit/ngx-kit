import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() content: Content;

  objOptions = [
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

  options = ['123', '456', '789', 'abc'];

  selected = '123';
}
