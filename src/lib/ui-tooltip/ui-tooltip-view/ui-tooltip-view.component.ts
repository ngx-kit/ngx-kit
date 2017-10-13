import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import {
  KitClassService,
  KitCoreOverlayContainerPosition,
  KitOverlayPositionService,
  KitStyleService,
} from '@ngx-kit/ngx-kit';
import { UiTooltipColors } from '../meta';

@Component({
  selector: 'ui-tooltip-view',
  template: `{{ content }}`,
  styleUrls: ['./ui-tooltip-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
    KitClassService,
  ],
})
export class UiTooltipViewComponent implements OnChanges {
  @Input() anchorEl: HTMLElement;

  @Input() color: UiTooltipColors;

  @Input() content: string;

  @Input() position: KitCoreOverlayContainerPosition;

  constructor(private overlayPosition: KitOverlayPositionService,
              private kitClass: KitClassService) {
  }

  ngOnChanges() {
    // position service
    this.overlayPosition.anchor = this.anchorEl;
    this.overlayPosition.position = this.position;
    this.overlayPosition.reposition();
    // class
    this.kitClass.apply({
      color: this.color,
    });
  }
}
