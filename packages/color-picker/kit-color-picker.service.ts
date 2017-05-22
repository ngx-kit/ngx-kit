import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitColorPickerTheme } from './interfaces';

@Injectable()
export class KitColorPickerService extends KitComponentService<KitColorPickerTheme> {

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
