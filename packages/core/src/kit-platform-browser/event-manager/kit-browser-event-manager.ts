import { Injectable } from '@angular/core';
import { KitEventManager } from '../../kit-event-manager/kit-event-manager';

@Injectable()
export class KitBrowserEventManager extends KitEventManager {
  listenGlobal(eventName: string, handler: Function, useCapture?: boolean): Function {
    window.addEventListener(eventName, handler as any, useCapture);
    return () => window.removeEventListener(eventName, handler as any, useCapture);
  }

  getEventPath(event: Event): EventTarget[] {
    const path = [];
    let node = event.target;
    while (node !== document.body) {
      path.push(node);
      node = node['parentNode'];
    }
    return path;
  }
}
