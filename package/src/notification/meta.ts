import { KitCoreOverlayContainerPositionCorner } from '../core/meta/overlay';

export interface KitNotificationItem {
  __id: string;
  message: string;
  title: string;
}

export interface KitNotificationHostConfig {
  position: KitCoreOverlayContainerPositionCorner;
}
