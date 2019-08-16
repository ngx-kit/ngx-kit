export type LiteNotificationPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export interface LiteNotificationItemParams {
  message: string;
  title?: string;
  color?: 'default' | 'primary' | 'danger';
  position?: LiteNotificationPosition;
}
