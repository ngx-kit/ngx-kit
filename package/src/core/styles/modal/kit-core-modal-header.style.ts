import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreModalHeaderStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'block',
    };
  }
}
