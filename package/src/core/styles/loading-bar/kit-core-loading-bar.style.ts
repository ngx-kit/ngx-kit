import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreLoadingBarStyle implements KitComponentStyle {
  bar(): StyleDef {
    return {
      minHeight: 1,
      width: '100%',
    }
  }

  host(): StyleDef {
    return {
      minHeight: 10,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
      overflow: 'hidden',
    };
  }
}
