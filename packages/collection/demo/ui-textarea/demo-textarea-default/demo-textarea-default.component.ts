import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-textarea-default',
  templateUrl: './demo-textarea-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTextareaDefaultComponent {
  textareaModel = '';
}
