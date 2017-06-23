import { Component, Inject, Input, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle, kitComponentTooltipView, OverlayContainerPosition } from '@ngx-kit/core';

/**
 * @todo add pointer
 */

@Component({
  selector: 'kit-tooltip-view',
  template: `
    <kit-overlay-container [type]="'side'"
                           [anchor]="anchor"
                           [position]="position">
      <div styler="tooltip">{{ text }}</div>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTooltipViewComponent implements OnInit {

  @Input() text: string;
  @Input() position: OverlayContainerPosition;
  @Input() anchor: HTMLElement;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTooltipView) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
