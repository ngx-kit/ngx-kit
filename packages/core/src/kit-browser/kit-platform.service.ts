import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable()
export class KitPlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
