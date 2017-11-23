export abstract class KitEventManager {
  abstract listenGlobal(eventName: string, handler: Function, useCapture?: boolean): Function;

  abstract getEventPath(event: any): any[];
}
