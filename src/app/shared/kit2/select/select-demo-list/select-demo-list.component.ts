import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-select-demo-list',
  templateUrl: './select-demo-list.component.html',
})
export class SelectDemoListComponent {
  options = ['123', '456', '789', 'abc'];

  selected = '123';
}
