import { Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreToggleStyle implements KitComponentStyle {
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
    return defMerge([
      {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 22,
        width: 44,
        lineHeight: 20,
        verticalAlign: 'middle',
        borderRadius: 20,
        cursor: 'pointer',
        userSelect: 'none',
        $nest: {
          '&:after': {
            position: 'absolute',
            width: 18,
            height: 18,
            left: 1,
            top: 1,
            borderRadius: 18,
            background: '#000',
            content: '" "',
            cursor: 'pointer',
          },
        },
      },
      defToggle(state.checked, {
        $nest: {
          '&:after': {
            left: '100%',
            marginLeft: -19,
            background: '#000',
          },
        },
      }),
    ]);
  }

  viewInner(state: {checked: boolean}): StyleDef {
    return {
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
