import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional, } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';
import { KitButtonGroupComponent } from '../kit-button-group/kit-button-group.component';
import { KitButtonColor, KitButtonSize } from '../meta';

/**
 * @apiOrder 1
 */
@Component({
  // tslint:disable-next-line
  selector: 'button[kitButton],a[kitButton]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./kit-button.component.scss'],
  providers: [
    KitClassService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitButtonComponent implements OnInit, OnChanges {
  @Input() color: KitButtonColor = 'default';

  @Input() disabled = false;

  @Input() kitButton: void;

  @Input() size: KitButtonSize = 'm';

  constructor(private kitClass: KitClassService,
              @Optional() private group: KitButtonGroupComponent) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      disabled: this.disabled,
      color: this.color,
      size: this.size,
      groupDirection: !!this.group ? this.group.direction : null,
    });
  }
}
