export interface EvoNotificationHostConfig {
  duration: number;
}

export interface EvoNotificationItem<P = {}> {
  __id: string;
  params: P;
}
