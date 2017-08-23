import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreMenuGroupStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  items(): StyleDef {
    return {};
  }
}
