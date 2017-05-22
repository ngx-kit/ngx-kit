import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitAccordionTheme } from './interfaces';

@Injectable()
export class KitAccordionService extends KitComponentService<KitAccordionTheme> {

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
      panelTitle: {
        base: {
          padding: '8px',
          borderBottom: '1px solid transparent',
        },
        swatchMap: {
          color: 'text',
          background: 'color',
          borderBottomColor: 'darken',
        },
      },
      panel: {
        base: {
          padding: '8px',
        }
      }
    };
  }

}
