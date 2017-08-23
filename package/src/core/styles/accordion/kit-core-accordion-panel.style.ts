import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreAccordionPanelStyle implements KitComponentStyle {
  content(): StyleDef {
    return {};
  }

  host(): StyleDef {
    return {
      display: 'block',
    };
  }

  title(): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
    };
  }
}
