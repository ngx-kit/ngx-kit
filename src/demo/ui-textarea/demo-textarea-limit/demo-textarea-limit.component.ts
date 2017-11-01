import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-textarea-limit',
  templateUrl: './demo-textarea-limit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTextareaLimitComponent {
  textareaModel = '';
}
