import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-radio-group-demo-direction',
  templateUrl: './radio-group-demo-direction.component.html',
})
export class RadioGroupDemoDirectionComponent {
  options = [
    {value: 'first', label: 'First'},
    {value: 'second', label: 'Second'},
    {value: 'third', label: 'Third'},
  ];

  selected = 'first';
}
