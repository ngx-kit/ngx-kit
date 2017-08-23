import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreLayoutHeaderStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      flex: '0 0 auto',
    };
  }
}
