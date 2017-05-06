import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitSwatch, KitThemeProps } from '@ngx-kit/core';

import { KitLabelTheme } from './interfaces';

@Injectable()
export class KitLabelService extends KitComponentService<KitLabelTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitLabelTheme>('label'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
          borderRadius: '.33rem',
          display: 'inline-block',
          fontWeight: 'normal',
          lineHeight: 1,
          minWidth: '1px',
          textAlign: 'center',
        },
        size: {
          s: {
            padding: '2px 4px',
            fontSize: '.8rem',
          },
          m: {
            padding: '2px 6px',
            fontSize: '.9rem',
          },
          l: {
            padding: '4px 8px',
            fontSize: '1.1rem',
          },
        },
        swatchMap: {
          background: 'color',
          color: 'text',
        },
      }
    };
  }

}
