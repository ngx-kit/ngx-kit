import { Component, Inject, Input, OnInit } from '@angular/core';
import { KitComponentStyle, kitComponentTooltipView, OverlayContainerPosition } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

/**
 * @todo add pointer
 */
@Component({
  selector: 'kit-tooltip-view,[kit-tooltip-view],[kitTooltipView]',
  template: `
    <kit-overlay-container [type]="'side'"
                           [anchor]="anchor"
                           [opened]="opened"
                           [position]="position">
      <div styler="tooltip">{{ text }}</div>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTooltipViewComponent implements OnInit {
  @Input() anchor: HTMLElement;

  @Input() kitTooltipView: any;

  @Input() opened = false;

  @Input() position: OverlayContainerPosition;

  @Input() text: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTooltipView) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
