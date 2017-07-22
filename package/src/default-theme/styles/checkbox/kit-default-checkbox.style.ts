import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultCheckboxStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  checkbox(): StyleDef {
    return {
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      outline: 'none',
      display: 'inline-block',
      lineHeight: 1,
      position: 'relative',
      verticalAlign: 'text-bottom',
    };
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {
      position: 'absolute',
      left: 0,
      zIndex: 1,
      cursor: 'pointer',
      opacity: 0,
      filter: 'alpha(opacity=0)',
      top: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
    };
  }

  label(): StyleDef {
    return {
      cursor: 'pointer',
    };
  }

  view(state: {checked: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      width: 14,
      height: 14,
      background: params.colors.body.color,
      border: [1, 'solid', params.colors.border.color],
      borderRadius: params.border.radius.s,
      transition: params.transitions.default,
      ...this.def.toggle(state.checked, {
        backgroundColor: params.colors.brand.color,
        borderColor: params.colors.brand.color,
        $nest: {
          '&:after': {
            transform: 'rotate(45deg) scale(1)',
            position: 'absolute',
            left: 4,
            top: 1,
            display: 'table',
            width: 5,
            height: 8,
            border: [2, 'solid', params.colors.body.color],
            borderTop: 0,
            borderLeft: 0,
            content: '" "',
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
          },
        },
      }),
    };
  }
}
