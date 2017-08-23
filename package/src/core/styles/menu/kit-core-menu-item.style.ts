import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreMenuItemStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      textDecoration: 'none',
    };
  }
}
