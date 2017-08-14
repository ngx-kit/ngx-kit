import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-textarea',
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  @Input() content: Content;

  value: string;
}
