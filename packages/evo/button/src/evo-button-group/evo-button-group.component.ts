import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { EvoClassService } from '@ngx-kit/evo/class';
import { EvoButtonGroupDirection } from '../meta';

@Component({
  selector: 'evo-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./evo-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EvoClassService,
  ],
})
export class EvoButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: EvoButtonGroupDirection = 'row';

  constructor(private evoClass: EvoClassService) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.evoClass.apply({
      direction: this.direction,
    });
  }
}
