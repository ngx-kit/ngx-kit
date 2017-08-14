import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input() content: Content;
}
