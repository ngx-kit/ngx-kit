import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-select-demo-dropdown',
  templateUrl: './select-demo-dropdown.component.html',
})
export class SelectDemoDropdownComponent {
  options = ['123', '456', '789', 'abc'];

  selected = '123';
}
