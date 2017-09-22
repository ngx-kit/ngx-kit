import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { KitButtonGroupDirection } from '../meta';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'kit-button-group,[kitButtonGroup]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./kit-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: KitButtonGroupDirection = 'row';

  @Input() kitButtonGroup: void;

  ngOnChanges() {
  }

  ngOnInit() {
  }
}
