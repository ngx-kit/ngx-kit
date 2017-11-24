import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'textarea[uiTextarea]',
  template: '',
  styleUrls: ['./ui-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextareaComponent {
  @Input() uiTextarea: void;
}
