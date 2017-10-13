import { KitCoreOverlayContainerPosition } from '@ngx-kit/ngx-kit';

export type <%= classify(name) %>Colors = 'default' | 'primary';

export interface <%= classify(name) %>Options {
  color?: <%= classify(name) %>Colors;
  position?: KitCoreOverlayContainerPosition;
}
