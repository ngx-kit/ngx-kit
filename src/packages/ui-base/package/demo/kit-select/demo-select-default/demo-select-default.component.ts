import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-select-default',
  templateUrl: './demo-select-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSelectDefaultComponent {
  selectModel = '';
}
