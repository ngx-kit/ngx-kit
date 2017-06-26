import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';

@Injectable()
export class RootStyle implements ComponentStyle {

  constructor(private def: StylerDefService) {
  }

  host(): StyleDef {
    return {};
  }

  header(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    };
  }

}
