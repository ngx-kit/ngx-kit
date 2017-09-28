import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-modal-default',
  templateUrl: './demo-modal-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalDefaultComponent {
  display = false;

  close() {
    this.display = false;
  }
}
