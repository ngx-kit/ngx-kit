import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kit-alert-demo-closable',
  templateUrl: './alert-demo-closable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoClosableComponent {
  isOpen = true;
}
