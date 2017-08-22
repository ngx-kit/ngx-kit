import { Inject, Injectable } from '@angular/core';
import { defPick, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_BOTTOM, BORDER_RIGHT } from '../../utils/apply-color-set';

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
  }): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.menus;
    const itemColor = colors.item;
    const subItemColor = colors.subItem;
    return {
      display: 'flex',
      alignItems: 'center',
      borderBottom: [2, 'solid', itemColor.base.border],
      cursor: 'pointer',
      userSelect: 'none',
      padding: [params.grid.v / 2, params.grid.h],
      color: itemColor.base.text,
      background: itemColor.base.background,
      textDecoration: 'none',
      ...defToggle(state.root, {
        // root items
        ...defPick(state.menuDirection, {
          // root && horizontal
          horizontal: {
            padding: [params.grid.v, params.grid.h * 2],
            marginBottom: -params.borders.width,
            ...defToggle(state.disabled, {
              cursor: 'default',
              ...applyColorSet(itemColor.disabled, params.borders.width, BORDER_BOTTOM),
            }, {
              ...applyColorSet(itemColor.base, params.borders.width, BORDER_BOTTOM),
              $nest: {
                '&:hover': {
                  ...applyColorSet(itemColor.hover, params.borders.width, BORDER_BOTTOM),
                },
              },
            }),
          },
          // root & vertical
          vertical: {
            borderRadius: params.borders.radius,
            marginRight: -params.borders.width,
            ...defToggle(state.disabled, {
              ...applyColorSet(itemColor.disabled, params.borders.width, BORDER_RIGHT),
            }, {
              ...applyColorSet(itemColor.base, params.borders.width, BORDER_RIGHT),
              $nest: {
                '&:hover': {
                  ...applyColorSet(itemColor.hover, params.borders.width, BORDER_RIGHT),
                },
              },
            }),
          },
        }),
      }, {
        // sub items
        ...defToggle(state.disabled, {
          cursor: 'default',
          ...applyColorSet(subItemColor.disabled, params.borders.width, BORDER_BOTTOM),
        }, {
          ...applyColorSet(subItemColor.base, params.borders.width, BORDER_BOTTOM),
          $nest: {
            '&:hover': {
              ...applyColorSet(subItemColor.hover, params.borders.width, BORDER_BOTTOM),
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
