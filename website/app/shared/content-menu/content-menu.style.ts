import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class ContentMenuStyle implements ComponentStyle {
  constructor() {
  }

  host(): StyleDef {
    return {
      $nest: {
        '& ul': {
          listStyle: 'none',
          margin: 0,
          padding: 8,
        },
        '& a': {
          display: 'block',
          color: '#b2b2b2',
          padding: [6, 8],
          margin: [2, 0],
          borderRadius: 3,
          textDecoration: 'none',
          $nest: {
            '&:hover': {
              background: 'rgba(0,0,0,.4)',
            },
          },
        },
      },
    };
  }
}
