import { Inject, Injectable } from '@angular/core';
import { defPick, defToggle, opacify, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuItemStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    disabled: boolean,
    menuDirection: 'horizontal' | 'vertical',
    hover: boolean,
    root: boolean,
    hasSubs: boolean,
    inverted: boolean,
    active: boolean,
  }): StyleDef {
    const params = this.theme.params;
    const textColor = state.inverted ? params.colors.background : params.colors.invert;
    return {
      padding: [params.grid.v / 2, params.grid.h],
      color: textColor,
      ...defToggle(state.root, {
        // root items
        ...defPick(state.menuDirection, {
          // root && horizontal
          horizontal: {
            padding: [params.grid.v, params.grid.h * 2],
            ...defToggle(state.disabled, {
              cursor: 'default',
              color: opacify(-.4, textColor),
            }, {
              ...defToggle(state.active, {
                background: opacify(-.5, params.colors.border),
              }, {
                $nest: {
                  '&:hover': {
                    background: opacify(-.75, params.colors.border),
                  },
                },
              }),
            }),
          },
          // root & vertical
          vertical: {
            borderRadius: params.borders.radius,
            ...defToggle(state.disabled, {}, {
              ...defToggle(state.active, {
                background: opacify(-.5, params.colors.border),
              }, {
                $nest: {
                  '&:hover': {
                    background: opacify(-.75, params.colors.border),
                  },
                },
              }),
            }),
          },
        }),
      }, {
        // sub items
        ...defToggle(state.disabled, {
          cursor: 'default',
        }, {
          $nest: {
            '&:hover': {
              background: opacify(-.5, params.colors.border),
            },
            '&:first-child': {
              borderTopLeftRadius: params.borders.radius,
              borderTopRightRadius: params.borders.radius,
            },
            '&:last-child': {
              borderBottomLeftRadius: params.borders.radius,
              borderBottomRightRadius: params.borders.radius,
            },
          },
          ...defToggle(state.hasSubs, {}),
        }),
      }),
    };
  }
}
