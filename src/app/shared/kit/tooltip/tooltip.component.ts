import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  @Input() content: Content;
}
