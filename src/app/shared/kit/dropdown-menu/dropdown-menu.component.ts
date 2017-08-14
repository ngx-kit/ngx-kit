import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent {
  @Input() content: Content;
}
