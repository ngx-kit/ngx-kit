export type EvoNotificationPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export interface EvoNotificationHostConfig {
  duration: number;
  position: EvoNotificationPosition;
}

export interface EvoNotificationItem {
  __id: string;
  params: EvoNotificationItemParams;
}

export interface EvoNotificationItemParams {
  message: string;
  title?: string;
  color?: 'default' | 'primary' | 'danger';
}
