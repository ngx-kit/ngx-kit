import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() content: Content;
}
