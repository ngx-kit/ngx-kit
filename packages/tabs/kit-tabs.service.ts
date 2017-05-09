import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitTabsTheme } from './interfaces';

@Injectable()
export class KitTabsService extends KitComponentService<KitTabsTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitTabsTheme>('tabs'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
        },
      },
      nav: {
        base: {
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        },
      },
      navTab: {
        base: {
          cursor: 'pointer',
          padding: '8px',
        },
        baseSwatchMap: {
          color: 'text',
          background: 'color',
        },
        active: {
          fontWeight: 600,
        },
        activeSwatchMap: {
          color: 'text',
          background: 'darken',
        }
      },
    };
  }

}
