import { Injectable } from '@angular/core';
import { KitEventManagerService } from '../../kit-event-manager/kit-event-manager.service';

@Injectable()
export class KitServerEventManagerService extends KitEventManagerService {
  listenGlobal(eventName: string, handler: Function, useCapture?: boolean): Function {
    return () => {
    };
  }

  getEventPath() {
    return [];
  }
}
