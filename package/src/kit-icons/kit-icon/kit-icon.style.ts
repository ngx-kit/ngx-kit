import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';

@Injectable()
export class KitIconStyle {
  host(): StyleDef {
    return {
      display: 'inline-block',
    };
  }
}
