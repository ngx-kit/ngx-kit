import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { KitDefaultThemeParamsButtonColor } from '../../meta';

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
    const color = this.theme.getModuleColor('Button', state.color) as KitDefaultThemeParamsButtonColor;
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
        borderRadius: this.theme.params.borders.radius.s,
        userSelect: 'none',
        boxShadow: this.theme.params.shadows.element,
      },
      this.def.toggle(state.disabled, {
        cursor: 'default',
        background: color.disabled.background,
        borderColor: color.disabled.border,
        color: color.disabled.text,
      }, {
        cursor: 'pointer',
        background: color.base.background,
        borderColor: color.base.border,
        color: color.base.text,
        $nest: {
          '&:hover': {
            background: color.hover.background,
            borderColor: color.hover.border,
            color: color.hover.text,
          },
          '&:active': {
            background: color.active.background,
            borderColor: color.active.border,
            color: color.active.text,
          },
        },
      }),
      this.def.pick(state.size, {
        xs: {
          padding: `${this.theme.params.grid.v / 8}px ${this.theme.params.grid.h / 2}px`,
          fontSize: '.8rem',
        },
        s: {
          padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h}px`,
          fontSize: '1rem',
        },
        m: {
          padding: `${this.theme.params.grid.v / 2}px ${this.theme.params.grid.h * 1.5}px`,
          fontSize: '1.1rem',
        },
        l: {
          padding: `${this.theme.params.grid.v}px ${this.theme.params.grid.h * 2.5}px`,
          fontSize: '1.3rem',
        },
        xl: {
          padding: `${this.theme.params.grid.v * 2}px ${this.theme.params.grid.h * 4}px`,
          fontSize: '1.6rem',
        },
      }, 'm'),
//      this.def.toggle(state.link, {
//        boxShadow: 'none',
//        paddingLeft: 0,
//        paddingRight: 0,
//        background: 'transparent',
//        borderColor: 'transparent',
//        text: text.background,
//        $nest: {
//          '&:hover': {
//            text: this.theme.colorMod(.05, text.background),
//            background: 'transparent',
//            textDecoration: 'underline',
//          },
//        },
//      }),
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
