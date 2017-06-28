import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';

@Injectable()
export class DemoStyle implements ComponentStyle {

  constructor(private def: StylerDefService) {
  }

  host(): StyleDef {
    return {
      display: 'block',
      padding: [8, 0],
      borderBottom: [1, 'solid', '#ddd'],
      $nest: {
        '&:last-child': {
          borderBottom: 0,
        },
      },
    };
  }

  demo(): StyleDef {
    return {
      padding: [8, 0],
    };
  }

  content(): StyleDef {
    return {
      display: 'grid',
      gridTemplateColumns: 'auto 100px',
      gridTemplateRows: '20px auto',
      fontSize: '.8rem',
    };
  }

  edit(): StyleDef {
    return {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
      textAlign: 'right',
    };
  }

  body(): StyleDef {
    return {
      gridColumn: '1 / 3',
      gridRow: '1 / 3',
    };
  }

}
