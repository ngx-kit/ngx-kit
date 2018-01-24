import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-modal-using-template',
  templateUrl: './demo-modal-using-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalUsingTemplateComponent {
  display = false;
}
