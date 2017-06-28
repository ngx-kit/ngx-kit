import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';

@Injectable()
export class ButtonStyle implements ComponentStyle {

  constructor(private def: StylerDefService) {
  }

  host(): StyleDef {
    return {
      display: 'grid',
      gridTemplateColumns: '[left] 40% [mid] 60% [right]',
      gridTemplateRows: '[start] 50% [end]',
      flexGrow: 1,
    };
  }

  left(): StyleDef {
    return {
      gridColumn: 'left / mid',
      gridRow: 'start / end',
    };
  }

  right(): StyleDef {
    return {
      gridColumn: 'mid / right',
      gridRow: 'start / end',
    };
  }

}
