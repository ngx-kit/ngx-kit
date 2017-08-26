import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-radio-group-demo-options',
  templateUrl: './radio-group-demo-options.component.html',
})
export class RadioGroupDemoOptionsComponent {
  options = [
    {value: 'first', label: 'First'},
    {value: 'second', label: 'Second'},
    {value: 'third', label: 'Third'},
  ];

  selected = 'first';
}
