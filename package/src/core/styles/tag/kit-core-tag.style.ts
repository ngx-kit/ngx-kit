import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreTagStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'inline-block',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    };
  }
}
