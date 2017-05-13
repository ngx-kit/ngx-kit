import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitPopoverTheme } from './interfaces';

@Injectable()
export class KitPopoverService extends KitComponentService<KitPopoverTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitPopoverTheme>('popover'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
          position: 'fixed',
          padding: 8,
          border: '1px solid #eeeeee',
          background: '#ffffff',
        },
      }
    };
  }

}
