import { Injectable } from '@angular/core';
import { KitFocusManagerService } from '@ngx-kit/core';

@Injectable()
export class KitFocusManagerRegistryService {
  stack: KitFocusManagerService[] = [];

  capture(manager: KitFocusManagerService) {
    const top = this.getTop();
    if (top) {
      top.onHold = true;
    }
    this.stack.push(manager);
  }

  release(manager: KitFocusManagerService) {
    const index = this.stack.indexOf(manager);
    if (index !== -1) {
      const isTop = this.stack.indexOf(manager) === this.stack.length - 1;
      this.stack.splice(index, 1);
      if (isTop) {
        const newTop = this.getTop();
        if (newTop) {
          newTop.onHold = false;
        }
      }
    }
  }

  private getTop() {
    return this.stack[this.stack.length - 1];
  }
}
