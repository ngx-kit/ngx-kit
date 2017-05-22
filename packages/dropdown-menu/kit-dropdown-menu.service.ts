import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitDropdownMenuTheme } from './interfaces';

@Injectable()
export class KitDropdownMenuService extends KitComponentService<KitDropdownMenuTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
        },
      },
      item: {
        base: {
          display: 'block',
          borderBottom: '1px solid #eeeeee',
          $nest: {
            '&:last-child': {
              borderBottom: 0,
            },
          },
        },
      },
    };
  }

}
