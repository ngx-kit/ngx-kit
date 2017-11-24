import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'input[uiInput]',
  template: '',
  styleUrls: ['./ui-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputComponent {
  @Input() uiInput: void;
}
