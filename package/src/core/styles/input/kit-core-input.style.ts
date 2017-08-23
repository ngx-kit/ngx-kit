import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreInputStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {
      boxSizing: 'border-box',
      width: '100%',
    };
  }
}
