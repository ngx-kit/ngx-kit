import { KitCoreOverlayContainerPositionCorner } from '../overlay/meta';

export interface KitNotificationHostConfig {
  duration: number;
  position: KitCoreOverlayContainerPositionCorner;
}

export interface KitNotificationItem {
  __id: string;
  params: any;
}
