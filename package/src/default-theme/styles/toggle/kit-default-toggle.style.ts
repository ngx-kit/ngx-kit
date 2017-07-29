import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultToggleStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
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
      width: 44,
      height: 22,
    };
  }

  label(): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
    };
  }

  toggle(): StyleDef {
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

  view(state: {checked: boolean}): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(params.modules.toggle.color);
    const checkedColor = this.theme.getColor(params.modules.toggle.checkedColor);
    return this.def.merge([
      {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 22,
        width: 44,
        lineHeight: 20,
        verticalAlign: 'middle',
        background: color.background,
        borderRadius: 20,
        border: '1px solid #ccc',
        cursor: 'pointer',
        transition: params.transitions.default,
        userSelect: 'none',
        $nest: {
          '&:after': {
            position: 'absolute',
            width: 18,
            height: 18,
            left: 1,
            top: 1,
            borderRadius: 18,
            backgroundColor: '#ffffff',
            content: '" "',
            cursor: 'pointer',
            transition: 'all .3s,width .3s',
          },
        },
      },
      this.def.toggle(state.checked, {
        backgroundColor: checkedColor.background,
        borderColor: checkedColor.border,
        $nest: {
          '&:after': {
            left: '100%',
            marginLeft: -19,
          },
        },
      }),
    ]);
  }

  viewInner(state: {checked: boolean}): StyleDef {
    return {
      color: '#fff',
      fontSize: '12px',
      display: 'block',
      marginLeft: 24,
      marginRight: 6,
      ...this.def.toggle(state.checked, {
        marginLeft: 6,
        marginRight: 24,
      }),
    };
  }
}
