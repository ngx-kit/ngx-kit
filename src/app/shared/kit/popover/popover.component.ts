import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  @Input() content: Content;
}
