import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  checked = false;

  @Input() content: Content;
}
