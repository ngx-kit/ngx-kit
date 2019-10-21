import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { EvoClass } from '@ngx-kit/evo/util';
import { LiteButtonGroupDirection } from '../meta';

@Component({
  selector: 'lite-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./lite-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EvoClass,
  ],
})
export class LiteButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: LiteButtonGroupDirection = 'row';

  constructor(private cl: EvoClass) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.cl.apply({
      direction: this.direction,
    });
  }
}
