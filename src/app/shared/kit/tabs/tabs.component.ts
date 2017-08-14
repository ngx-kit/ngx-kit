import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  @Input() content: Content;
}
