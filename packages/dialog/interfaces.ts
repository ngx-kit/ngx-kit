import { EventEmitter } from '@angular/core';

import { KitStyle } from '@ngx-kit/core';

export interface KitDialogTheme {
  host: {
    base: KitStyle;
  };
}

export interface DialogHandlers {
  close: EventEmitter<any>;
}