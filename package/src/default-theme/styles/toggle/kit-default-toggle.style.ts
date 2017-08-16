import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultToggleStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
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
    return defMerge([
      {
        background: params.moduleToggle.colors.base.background,
        border: [params.borders.width, 'solid', params.moduleToggle.colors.base.border],
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 22 + params.borders.width,
        width: 44,
        lineHeight: 20,
        verticalAlign: 'middle',
        borderRadius: 20,
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
            background: params.moduleToggle.colors.base.toggle,
            content: '" "',
            cursor: 'pointer',
            transition: 'all .3s,width .3s',
          },
        },
      },
      defToggle(state.checked, {
        background: params.moduleToggle.colors.checked.background,
        borderColor: params.moduleToggle.colors.checked.border,
        $nest: {
          '&:after': {
            left: '100%',
            marginLeft: -19,
            background: params.moduleToggle.colors.checked.toggle,
          },
        },
      }),
    ]);
  }

  viewInner(state: {checked: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      color: params.moduleToggle.colors.base.background,
      fontSize: '12px',
      display: 'block',
      marginLeft: 24,
      marginRight: 6,
      ...defToggle(state.checked, {
        marginLeft: 6,
        marginRight: 24,
      }),
    };
  }
}
