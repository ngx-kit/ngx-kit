import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { OverlayContainerPosition } from '../core/meta/overlay';
import { kitComponentTooltipView } from '../core/meta/tokens';

/**
 * @todo add pointer
 */
@Component({
  selector: 'kit-tooltip-view,[kitTooltipView]',
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
