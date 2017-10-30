export interface KitNotificationHostConfig {
  duration: number;
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}

export interface KitNotificationItem {
  __id: string;
  params: any;
}
