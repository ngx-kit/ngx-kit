import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';
import { KitButtonGroupDirection } from '../meta';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'kit-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./kit-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitClassService,
  ],
})
export class KitButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: KitButtonGroupDirection = 'row';

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
