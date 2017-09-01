import { Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitButtonStyle } from '../../meta/styles/button-styles';

@Injectable()
export class KitCoreButtonStyle implements KitButtonStyle {
  host(state: {disabled: boolean}): StyleDef {
    return {
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
      whiteSpace: 'nowrap',
      lineHeight: '1.42857',
      userSelect: 'none',
      ...defToggle(state.disabled, {
        cursor: 'default',
      }),
    };
  }
}
