import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-alert',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  closableDemoIsOpen = true;

  closeTextDemoIsOpen = true;

  @Input() content: Content;
}
