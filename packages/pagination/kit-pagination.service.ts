import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitPaginationTheme } from './interfaces';

@Injectable()
export class KitPaginationService extends KitComponentService<KitPaginationTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
        },
      }
    };
  }

}
