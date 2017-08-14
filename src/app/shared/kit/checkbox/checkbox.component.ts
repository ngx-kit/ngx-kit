import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  checked = false;

  @Input() content: Content;
}
