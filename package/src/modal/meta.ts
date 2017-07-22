import { EventEmitter } from '@angular/core';

export interface DialogHandlers {
  close: EventEmitter<any>;
}