import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitBadgeTheme } from './interfaces';

@Injectable()
export class KitBadgeService extends KitComponentService<KitBadgeTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitBadgeTheme>('badge'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
          borderRadius: '1rem',
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
        type: {
          default: {
            background: this.themeProps.colors.primary,
            color: '#ffffff',
          },
          primary: {
            background: this.themeProps.colors.primary,
            color: '#ffffff',
          },
          important: {
            background: this.themeProps.colors.important,
            color: '#ffffff',
          },
          added: {
            background: this.themeProps.colors.added,
            color: '#ffffff',
          },
          removed: {
            background: this.themeProps.colors.removed,
            color: '#ffffff',
          },
        },
      }
    };
  }

}
