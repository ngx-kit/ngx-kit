import { Injectable } from '@angular/core';

@Injectable()
export abstract class KitEventManagerService {
  /**
   * Listen event on the global root object.
   *
   * Reason: native Angular EventManager does not provide event listener with useCapture param.
   */
  abstract listenGlobal(eventName: string, handler: Function, useCapture?: boolean): Function;

  /**
   * Get array of objects visited by event.
   */
  abstract getEventPath(event: any): any[];
}
