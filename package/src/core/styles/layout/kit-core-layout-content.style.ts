import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreLayoutContentStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'flex',
      flexGrow: 1,
      overflow: 'auto',
    };
  }
}
