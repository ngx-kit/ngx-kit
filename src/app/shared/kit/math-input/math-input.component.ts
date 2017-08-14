import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-math-input',
  templateUrl: './math-input.component.html',
})
export class MathInputComponent {
  @Input() content: Content;

  value: string;
}
