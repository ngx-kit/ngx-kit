import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import {
  KitClassService,
  KitCoreOverlayContainerPosition,
  KitOverlayPositionService,
  KitStyleService,
} from '@ngx-kit/ngx-kit';
import { KitTooltipColors } from '../meta';

@Component({
  selector: 'kit-tooltip-view',
  template: `{{ content }}`,
  styleUrls: ['./kit-tooltip-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
    KitClassService,
  ],
})
export class KitTooltipViewComponent implements OnChanges {
  @Input() anchorEl: HTMLElement;

  @Input() color: KitTooltipColors;

  @Input() content: string;

  @Input() position: KitCoreOverlayContainerPosition;

  constructor(private service: KitOverlayPositionService,
              private kitClass: KitClassService) {
  }

  ngOnChanges() {
    // position service
    this.service.anchor = this.anchorEl;
    this.service.position = this.position;
    this.service.reposition();
    // class
    this.kitClass.apply({
      color: this.color,
    });
  }
}
