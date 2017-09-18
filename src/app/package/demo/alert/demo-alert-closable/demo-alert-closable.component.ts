import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-alert-closable',
  templateUrl: './demo-alert-closable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAlertClosableComponent {
  isOpen = true;
}
