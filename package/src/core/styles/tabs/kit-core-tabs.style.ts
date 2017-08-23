import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreTabsStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  nav(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    };
  }

  panel(): StyleDef {
    return {};
  }

  tab(): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
    };
  }
}
