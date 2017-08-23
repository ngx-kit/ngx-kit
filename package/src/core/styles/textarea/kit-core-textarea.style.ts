import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreTextareaStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'block',
    };
  }

  textarea(state: {
    disabled: boolean;
    readonly: boolean;
  }): StyleDef {
    return {
      width: '100%',
      boxSizing: 'border-box',
    };
  }
}
