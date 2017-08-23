import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreMenuSubStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  menu(state: {position: 'bottom' | 'right'}): StyleDef {
    return {
      display: 'block',
    };
  }
}
