import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() content: Content;

  constructor() {
  }
}
