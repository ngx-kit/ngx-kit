import { KitCoreOverlayContainerPositionCorner } from '../core/meta/overlay';

export interface KitNotificationHostConfig {
  duration: number;
  position: KitCoreOverlayContainerPositionCorner;
}

export interface KitNotificationItem {
  __id: string;
  message: KitNotificationMessage;
}

export interface KitNotificationMessage {
  duration?: number;
  message: string;
  title?: string;
}
