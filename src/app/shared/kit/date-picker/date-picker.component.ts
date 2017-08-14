import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent {
  @Input() content: Content;

  date = '2017-08-18';
}
