import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Class } from '@ngx-kit/evo/util';
import { ButtonGroupDirection } from '../meta';

@Component({
  selector: 'evo-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    Class,
  ],
})
export class ButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: ButtonGroupDirection = 'row';

  constructor(private cl: Class) {
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
