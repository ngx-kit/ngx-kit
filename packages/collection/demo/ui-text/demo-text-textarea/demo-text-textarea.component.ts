import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-text-textarea',
  templateUrl: './demo-text-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTextTextareaComponent {
  inputModel = '';
}
