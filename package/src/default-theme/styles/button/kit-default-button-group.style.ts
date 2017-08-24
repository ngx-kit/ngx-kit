import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitButtonGroupStyle } from '../../../core/meta/styles/button-styles';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultButtonGroupStyle implements KitButtonGroupStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {direction: any}): StyleDef {
    const params = this.theme.params;
    return {
      ...defPick(state.direction, {
        horizontal: {
          $nest: {
            '& > *': {
              borderRadius: 0,
            },
            '& > *:first-child': {
              borderBottomLeftRadius: params.borders.radius,
              borderTopLeftRadius: params.borders.radius,
            },
            '& > *:last-child': {
              borderBottomRightRadius: params.borders.radius,
              borderTopRightRadius: params.borders.radius,
            },
          },
        },
        vertical: {
          $nest: {
            '& > *': {
              borderRadius: 0,
            },
            '& > *:first-child': {
              borderTopLeftRadius: params.borders.radius,
              borderTopRightRadius: params.borders.radius,
            },
            '& > *:last-child': {
              borderBottomLeftRadius: params.borders.radius,
              borderBottomRightRadius: params.borders.radius,
            },
          },
        },
      }, 'horizontal'),
    };
  }
}
