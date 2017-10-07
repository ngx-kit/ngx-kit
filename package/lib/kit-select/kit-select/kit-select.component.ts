import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'select[kitSelect]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitSelectComponent {
  @Input() kitSelect: void;
}
