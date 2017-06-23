import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultBadgeStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {type: any, size: any}): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: '1rem',
      display: 'inline-block',
      fontWeight: 'normal',
      minWidth: '1px',
      textAlign: 'center',
      lineHeight: '1',
      ...this.def.pick(state.type, {
        'default': {
          background: params.colors.button.color,
          color: params.colors.button.text,
        },
        primary: {
          background: params.colors.brand.color,
          color: params.colors.brand.text,
        },
        success: {
          background: params.colors.success.color,
          color: params.colors.success.text,
        },
        warning: {
          background: params.colors.warning.color,
          color: params.colors.warning.text,
        },
        error: {
          background: params.colors.error.color,
          color: params.colors.error.text,
        },
      }, 'default'),
      ...this.def.pick(state.size, {
        s: {
          padding: `${params.grid.v / 4}px ${params.grid.h / 2}px`,
          fontSize: '.8rem',
        },
        m: {
          padding: `${params.grid.v / 4}px ${params.grid.h}px`,
          fontSize: '.9rem',
        },
        l: {
          padding: `${params.grid.v / 2}px ${params.grid.h}px`,
          fontSize: '1.1rem',
        },
      }, 'm'),
    };
  }

}
