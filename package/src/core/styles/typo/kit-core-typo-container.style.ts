import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreTypoContainerStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }
}
