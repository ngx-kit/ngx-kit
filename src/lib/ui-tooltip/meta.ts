import { KitCoreOverlayContainerPosition } from '@ngx-kit/ngx-kit';

export type UiTooltipColors = 'default' | 'primary';

export interface UiTooltipOptions {
  color?: UiTooltipColors;
  position?: KitCoreOverlayContainerPosition;
}
