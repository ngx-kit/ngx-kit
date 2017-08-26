import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-radio-group-demo-custom-options',
  templateUrl: './radio-group-demo-custom-options.component.html',
})
export class RadioGroupDemoCustomOptionsComponent {
  options = [
    {customValue: 'first', customLabel: 'First'},
    {customValue: 'second', customLabel: 'Second'},
    {customValue: 'third', customLabel: 'Third'},
  ];

  selected = 'first';
}
