import { EventEmitter } from '@angular/core';
import { KitCoreOverlayComponent } from '../core/meta/overlay';

export interface DialogHandlers extends KitCoreOverlayComponent {
  close: EventEmitter<any>;
}
