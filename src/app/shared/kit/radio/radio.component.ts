import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  @Input() content: Content;

  customOptions = [
    {customValue: 'first', customLabel: 'First'},
    {customValue: 'second', customLabel: 'Second'},
    {customValue: 'third', customLabel: 'Third'},
  ];

  options = [
    {value: 'first', label: 'First'},
    {value: 'second', label: 'Second'},
    {value: 'third', label: 'Third'},
  ];

  selected = 'first';

  simpleOptions = ['first', 'second', 'third'];
}
