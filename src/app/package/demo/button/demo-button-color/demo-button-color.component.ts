import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-button-color',
  templateUrl: './demo-button-color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoButtonColorComponent {
}
