import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() content: Content;
}
