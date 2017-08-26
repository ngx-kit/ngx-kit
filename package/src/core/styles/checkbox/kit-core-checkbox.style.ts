import { Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreCheckboxStyle implements KitComponentStyle {
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
      margin: 0,
    };
  }

  label(): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
    };
  }

  view(state: {
    checked: boolean;
  }): StyleDef {
    return {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      width: 14,
      height: 14,
      ...defToggle(state.checked, {
        $nest: {
          '&::after': {
            transform: 'rotate(45deg) scale(1)',
            position: 'absolute',
            left: 4,
            top: 1,
            display: 'table',
            width: 5,
            height: 8,
            borderTopWidth: 0,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderLeftWidth: 0,
            borderColor: '#000',
            borderStyle: 'solid',
            content: '" "',
          },
        },
      }),
    };
  }
}