import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreModalStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  modal(): StyleDef {
    return {
      zIndex: 99999,
    };
  }
}
