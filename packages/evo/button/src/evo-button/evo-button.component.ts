import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { EvoClassService } from '@ngx-kit/evo/class';
import { EvoButtonColor, EvoButtonSize } from '../meta';
import { EvoButtonGroupComponent } from '../evo-button-group/evo-button-group.component';

@Component({
  // tslint:disable-next-line
  selector: 'button[evoButton],a[evoButton]',
  templateUrl: './evo-button.component.html',
  styleUrls: ['./evo-button.component.scss'],
  providers: [
    EvoClassService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoButtonComponent implements OnInit, OnChanges {
  @Input() color: EvoButtonColor = 'default';

  @Input() disabled = false;

  @Input() evoButton: void;

  @Input() size: EvoButtonSize = 'm';

  @Input() icon: string;

  constructor(
    private kitClass: EvoClassService,
    @Optional() private group: EvoButtonGroupComponent,
  ) {
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
