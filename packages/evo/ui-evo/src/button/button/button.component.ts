import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { Class } from '@ngx-kit/evo/util';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { ButtonColor, ButtonSize } from '../meta';

@Component({
  // tslint:disable-next-line
  selector: 'button[uiButton],a[uiButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [
    Class,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() color: ButtonColor = 'default';

  @Input() disabled = false;

  @Input() evoButton: void;

  @Input() size: ButtonSize = 'm';

  @Input() icon: string;

  constructor(
    private cl: Class,
    @Optional() private group: ButtonGroupComponent,
  ) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.cl.apply({
      disabled: this.disabled,
      color: this.color,
      size: this.size,
      groupDirection: !!this.group ? this.group.direction : null,
    });
  }
}
