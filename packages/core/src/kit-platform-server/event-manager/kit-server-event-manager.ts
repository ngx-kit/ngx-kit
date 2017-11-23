import { Injectable } from '@angular/core';
import { KitEventManager } from '../../kit-event-manager/kit-event-manager';

@Injectable()
export class KitServerEventManager extends KitEventManager {
  listenGlobal(eventName: string, handler: Function, useCapture?: boolean): Function {
    return () => {
    };
  }

  getEventPath() {
    return [];
  }
}
