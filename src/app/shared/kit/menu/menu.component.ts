import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() content: Content;
}
