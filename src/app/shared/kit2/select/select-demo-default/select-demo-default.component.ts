import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-select-demo-default',
  templateUrl: './select-demo-default.component.html',
})
export class SelectDemoDefaultComponent {
  options = ['123', '456', '789', 'abc'];

  selected = '123';
}
