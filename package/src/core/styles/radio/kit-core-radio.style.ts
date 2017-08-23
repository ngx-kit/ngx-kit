import { Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreRadioStyle implements KitComponentStyle {
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
      userSelect: 'none',
    };
  }

  radio(): StyleDef {
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

  view(state: {
    checked: boolean;
    hover: boolean;
    focus: boolean;
    disabled: boolean;
  }): StyleDef {
    return {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      width: 14,
      height: 14,
      borderRadius: '50%',
      ...defToggle(state.checked,
          {
            $nest: {
              '&:after': {
                position: 'absolute',
                left: 4,
                top: 4,
                display: 'table',
                width: 6,
                height: 6,
                border: 0,
                borderRadius: '50%',
                content: '" "',
                background: '#000',
              },
            },
          },
      ),
    }
  }
}
