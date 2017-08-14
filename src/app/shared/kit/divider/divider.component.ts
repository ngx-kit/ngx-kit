import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-divider',
  templateUrl: './divider.component.html',
})
export class DividerComponent {
  @Input() content: Content;
}
