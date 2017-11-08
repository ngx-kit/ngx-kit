import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { KitClassService } from '@ngx-kit/core';
import { UiButtonGroupDirection } from '../meta';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'ui-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./ui-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitClassService,
  ],
})
export class UiButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: UiButtonGroupDirection = 'row';

  constructor(private kitClass: KitClassService) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      direction: this.direction,
    });
  }
}
