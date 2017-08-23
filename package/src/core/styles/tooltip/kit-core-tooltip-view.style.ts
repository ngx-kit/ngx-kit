import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreTooltipViewStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  tooltip(): StyleDef {
    return {};
  }
}
