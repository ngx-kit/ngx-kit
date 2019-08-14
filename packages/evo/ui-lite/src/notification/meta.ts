export type UiNotificationPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export interface UiNotificationHostConfig {
  duration: number;
  position: UiNotificationPosition;
}

export interface UiNotificationItem {
  __id: string;
  params: UiNotificationItemParams;
}

export interface UiNotificationItemParams {
  message: string;
  title?: string;
  color?: 'default' | 'primary' | 'danger';
}
