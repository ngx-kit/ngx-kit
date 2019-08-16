import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { EvoClass } from '@ngx-kit/evo/util';
import { LiteButtonGroupComponent } from '../button-group/lite-button-group.component';
import { LiteButtonColor, LiteButtonSize } from '../meta';

@Component({
  // tslint:disable-next-line
  selector: 'button[liteButton],a[liteButton]',
  templateUrl: './lite-button.component.html',
  styleUrls: ['./lite-button.component.scss'],
  providers: [
    EvoClass,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiteButtonComponent implements OnInit, OnChanges {
  @Input() color: LiteButtonColor = 'default';

  @Input() disabled = false;

  @Input() evoButton: void;

  @Input() size: LiteButtonSize = 'm';

  @Input() icon: string;

  constructor(
    private cl: EvoClass,
    @Optional() private group: LiteButtonGroupComponent,
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
