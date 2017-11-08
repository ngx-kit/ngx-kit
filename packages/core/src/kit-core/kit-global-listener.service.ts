import { Injectable } from '@angular/core';
import { KitPlatformService } from './kit-platform.service';

@Injectable()
export class KitGlobalListenerService {
  constructor(private platform: KitPlatformService) {
  }

  listen(eventName: string, callback: any): () => void {
    if (this.platform.isBrowser()) {
      // Renderer2 does not support useCapture
      window.addEventListener(eventName, callback, true);
      return () => {
        window.removeEventListener(eventName, callback, true);
      }
    } else {
      return () => {
      };
    }
  }
}
