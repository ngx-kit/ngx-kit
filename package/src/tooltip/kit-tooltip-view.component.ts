import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { kitTooltipViewStyle } from '../core/meta/tokens';

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
      <div [styler]="['tooltip', {color: color}]">{{ text }}</div>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTooltipViewComponent {
  @Input() anchor: HTMLElement;

  @Input() color: string;

  @Input() kitTooltipView: any;

  @Input() opened = false;

  @Input() position: KitCoreOverlayContainerPosition;

  @Input() text: string;

  constructor(private styler: StylerComponent,
              @Inject(kitTooltipViewStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-tooltip-view';
    this.styler.register(this.style);
  }

  cdrCheck() {
    this.cdr.markForCheck();
  }
}
