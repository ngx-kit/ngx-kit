import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, Style, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultToggleStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;

    const viewAfterBase: Style = {
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
    };

    return {
      host: {},
      toggle: {
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        outline: 'none',
        display: 'inline-block',
        lineHeight: 1,
        position: 'relative',
        verticalAlign: 'text-bottom',
      },
      input: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        cursor: 'pointer',
        opacity: 0,
        filter: 'alpha(opacity=0)',
        top: 0,
        width: 44,
        height: 22,
      },
      view: {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 22,
        width: 44,
        lineHeight: 20,
        verticalAlign: 'middle',
        background: params.colors.border.color,
        borderRadius: 20,
        border: '1px solid #ccc',
        cursor: 'pointer',
        transition: params.transitions.default,
        userSelect: 'none',
        $nest: {
          '&:after': viewAfterBase,
        },
        $states: {
          checked: {
            backgroundColor: params.colors.brand.color,
            borderColor: params.colors.brand.color,
            $nest: {
              '&:after': {
                ...viewAfterBase,
                left: '100%',
                marginLeft: -19,
              },
            },
          },
        },
      },
      viewInner: {
        color: '#fff',
        fontSize: '12px',
        display: 'block',
        marginLeft: 24,
        marginRight: 6,
        $states: {
          checked: {
            marginLeft: 6,
            marginRight: 24,
          },
        },
      },
      label: {
        cursor: 'pointer',
      },
    };
  }

}
