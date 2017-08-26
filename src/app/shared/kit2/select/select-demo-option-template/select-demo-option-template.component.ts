import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-select-demo-option-template',
  templateUrl: './select-demo-option-template.component.html',
})
export class SelectDemoOptionTemplateComponent {
  options = ['123', '456', '789', 'abc'];

  selected = '123';
}
