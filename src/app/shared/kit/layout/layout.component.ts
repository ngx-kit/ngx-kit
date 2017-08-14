import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  @Input() content: Content;
}
