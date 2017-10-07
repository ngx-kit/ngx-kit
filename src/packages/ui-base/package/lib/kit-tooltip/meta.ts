import { KitCoreOverlayContainerPosition } from '@ngx-kit/ngx-kit';

export type KitTooltipColors = 'default' | 'primary';

export interface KitTooltipOptions {
  color?: KitTooltipColors;
  position?: KitCoreOverlayContainerPosition;
}
