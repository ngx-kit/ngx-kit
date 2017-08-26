import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kit-alert-demo-close-text',
  templateUrl: './alert-demo-close-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoCloseTextComponent {
  isOpen = true;
}
