import { Inject, Injectable } from '@angular/core';

import { KitButtonStyle, KitButtonStyleSet } from '../../meta/components/button-style';
import { KitDefaultThemeService } from '../kit-default-theme.service';
import { kitTheme } from '../../meta/tokens';

@Injectable()
export class KitDefaultButtonStyle implements KitButtonStyle {

  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitButtonStyleSet {
    const params = this.theme.params;
    return {
      host: {
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
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        lineHeight: '1.42857',
        borderRadius: '3px',
        userSelect: 'none',
        boxShadow: params.shadows.element,
        $states: {
          size: [{
            xs: {
              padding: `${params.grid.h / 8}px ${params.grid.v / 2}px`,
              fontSize: '.8rem',
            },
            s: {
              padding: `${params.grid.h / 4}px ${params.grid.v}px`,
              fontSize: '1rem',
            },
            m: {
              padding: `${params.grid.h / 2}px ${params.grid.v * 1.5}px`,
              fontSize: '1.1rem',
            },
            l: {
              padding: `${params.grid.h}px ${params.grid.v * 2.5}px`,
              fontSize: '1.3rem',
            },
            xl: {
              padding: `${params.grid.h * 2}px ${params.grid.v * 4}px`,
              fontSize: '1.6rem',
            },
            $default: 'm',
          }],
          type: [{
            'default': {
              background: params.colors.button.color,
              color: params.colors.button.text,
              borderColor: params.colors.border.color,
            },
            primary: {
              background: params.colors.brand.color,
              borderColor: params.colors.brand.color,
              color: params.colors.brand.text,
            },
            success: {
              background: params.colors.success.color,
              borderColor: params.colors.success.color,
              color: params.colors.success.text,
            },
            warning: {
              background: params.colors.success.color,
              borderColor: params.colors.success.color,
              color: params.colors.success.text,
            },
            error: {
              background: params.colors.success.color,
              borderColor: params.colors.success.color,
              color: params.colors.success.text,
            },
            link: {
              boxShadow: 'none',
              paddingLeft: 0,
              paddingRight: 0,
              background: params.colors.link.color,
              borderColor: 'transparent',
              color: params.colors.link.text,
            },
            $default: 'default',
          }],
          disabled: {
            cursor: 'default',
            background: params.colors.border.color,
            borderColor: params.colors.border.color,
            color: params.colors.border.text,
          },
        },
      },
    };
  }

}
