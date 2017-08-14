import { Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() content: Content;
}
