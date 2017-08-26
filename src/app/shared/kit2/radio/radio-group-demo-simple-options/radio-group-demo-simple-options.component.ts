import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-radio-group-demo-simple-options',
  templateUrl: './radio-group-demo-simple-options.component.html',
})
export class RadioGroupDemoSimpleOptionsComponent {
  options = ['first', 'second', 'third'];

  selected = 'first';
}
