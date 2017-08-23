import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';

@Injectable()
export class KitCoreSelectStyle implements KitComponentStyle {
  dropdownOption(state: {
    selected: boolean;
  }): StyleDef {
    return {
      cursor: 'default',
    };
  }

  dropdownOptions(): StyleDef {
    return {};
  }

  dropdownSelect(): StyleDef {
    return {
      boxSizing: 'border-box',
      width: '100%',
    };
  }

  host(): StyleDef {
    return {};
  }

  nativeSelect(): StyleDef {
    return {
      boxSizing: 'border-box',
      width: '100%',
    };
  }

  option(): StyleDef {
    return {
      cursor: 'pointer',
    };
  }
}
