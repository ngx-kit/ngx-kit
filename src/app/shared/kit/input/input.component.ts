import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() content: Content;

  value: string;
}
