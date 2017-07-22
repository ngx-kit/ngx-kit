import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultButtonStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string;
    size: 'xs' | 's' | 'm' | 'l' | 'xs';
    grouped: 'none' | 'horizontal' | 'vertical';
    selected: boolean;
    disabled: boolean;
    loading: boolean;
    link: boolean;
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(state.color || params.modules.buttons.defaultColor);
    const styles: StyleDef = this.def.merge([
      {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        textDecoration: 'none',
        marginBottom: 0,
        fontWeight: 400,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
        backgroundImage: 'none',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        lineHeight: '1.42857',
        borderRadius: '3px',
        userSelect: 'none',
        boxShadow: params.shadows.element,
      },
      this.def.pick(state.size, {
        xs: {
          padding: `${params.grid.v / 8}px ${params.grid.h / 2}px`,
          fontSize: '.8rem',
        },
        s: {
          padding: `${params.grid.v / 4}px ${params.grid.h}px`,
          fontSize: '1rem',
        },
        m: {
          padding: `${params.grid.v / 2}px ${params.grid.h * 1.5}px`,
          fontSize: '1.1rem',
        },
        l: {
          padding: `${params.grid.v}px ${params.grid.h * 2.5}px`,
          fontSize: '1.3rem',
        },
        xl: {
          padding: `${params.grid.v * 2}px ${params.grid.h * 4}px`,
          fontSize: '1.6rem',
        },
      }, 'm'),
      {
        background: color.background,
        borderColor: color.border,
        color: color.text,
        $nest: {
          '&:hover': {
            background: this.theme.colorMod(.05, color.background),
          },
        },
      },
      this.def.pick(state.grouped, {
        horizontal: {
          borderRadius: 0,
          $nest: {
            '&:first-child': {
              borderBottomLeftRadius: '3px',
              borderTopLeftRadius: '3px',
            },
            '&:last-child': {
              borderBottomRightRadius: '3px',
              borderTopRightRadius: '3px',
            },
            '&:not(:first-child)': {
              borderLeft: 0,
            },
          },
        },
        vertical: {
          borderRadius: 0,
          $nest: {
            '&:first-child': {
              borderTopRightRadius: '3px',
              borderTopLeftRadius: '3px',
            },
            '&:last-child': {
              borderBottomRightRadius: '3px',
              borderBottomLeftRadius: '3px',
            },
            '&:not(:first-child)': {
              borderTop: 0,
            },
          },
        },
      }),
//      this.def.toggle(state.disabled, {
//        cursor: 'default',
//        background: params.colors.border.color,
//        borderColor: params.colors.border.color,
//        color: params.colors.border.text,
//        $nest: {
//          '&:hover': {
//            background: params.colors.border.color,
//          },
//        },
//      }),
      this.def.toggle(state.loading, {
        cursor: 'default',
      }),
    ]);
    if (state.selected) {
      if ('background' in styles) {
        styles.background = this.color.darken(.1, styles.background);
      }
    }
    if (state.loading) {
      if ('background' in styles) {
        styles.background = this.color.lighten(.1, styles.background);
      }
      if ('color' in styles) {
        styles.color = this.color.lighten(.1, styles.color as string);
      }
    }
    return styles;
  }
}
