import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  checked = false;

  color = 'skyblue';

  @Input() content: Content;
}
