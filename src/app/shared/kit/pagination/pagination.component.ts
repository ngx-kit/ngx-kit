import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() content: Content;
}
