import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitDatePickerTheme } from './interfaces';

@Injectable()
export class KitDatePickerService extends KitComponentService<KitDatePickerTheme> {

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
