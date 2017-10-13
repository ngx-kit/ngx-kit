import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'select[uiSelect]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSelectComponent {
  @Input() uiSelect: void;
}
