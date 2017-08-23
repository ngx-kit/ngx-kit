import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreAutoCompleteStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {
      display: 'block',
    };
  };

  result(): StyleDef {
    return {
      cursor: 'pointer',
    };
  }

  results(): StyleDef {
    return {};
  }
}
