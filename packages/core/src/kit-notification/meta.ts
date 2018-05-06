import { InjectionToken, Type } from '@angular/core';

export const KitNotificationHost = new InjectionToken<Type<any>>('ngx-kit.notification.host');

export type KitNotificationPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export interface KitNotificationHostConfig {
  duration: number;
  position: KitNotificationPosition;
}

export interface KitNotificationItem {
  __id: string;
  params: any;
}
