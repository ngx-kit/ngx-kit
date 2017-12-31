import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'input[uiText],textarea[uiText]',
  template: '',
  styleUrls: ['./ui-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextComponent {
  @Input() uiText: void;
}
