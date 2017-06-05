import { Inject, Injectable } from '@angular/core';

import { KitDatePickerStyle, KitDatePickerStyleSet, kitTheme } from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultDatePickerStyle implements KitDatePickerStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitDatePickerStyleSet {
    const params = this.theme.params;
    return {
      host: {},
      years: {
        display: 'flex',
        flexDirection: 'row',
        lineHeight: 30,
      },
      year: {
        border: `1px solid ${params.colors.border.color}`,
        $states: {
          type: [{
            change: {
              cursor: 'pointer',
              padding: '0 4px',
            },
            current: {
              flexGrow: 1,
              fontWeight: 600,
              fontSize: '1.15rem',
              textAlign: 'center',
            },
          }],
        }
      },
      months: {
        display: 'flex',
        flexDirection: 'row',
        lineHeight: 30,
      },
      month: {
        border: `1px solid ${params.colors.border.color}`,
        $states: {
          type: [{
            change: {
              cursor: 'pointer',
              padding: '0 4px',
            },
            current: {
              flexGrow: 1,
              fontWeight: 600,
              fontSize: '1.15rem',
              textAlign: 'center',
            },
          }],
        }
      },
      weekdays: {
        display: 'flex',
        flexDirection: 'row',
      },
      weekday: {
        border: `1px solid ${params.colors.border.color}`,
        boxSizing: 'border-box',
        cursor: 'pointer',
        flexShrink: 0,
        padding: 4,
        textAlign: 'center',
        transition: 'background .2s',
        width: '14.28574%',
      },
      dates: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      date: {
        border: `1px solid ${params.colors.border.color}`,
        boxSizing: 'border-box',
        cursor: 'pointer',
        flexShrink: 0,
        padding: 4,
        textAlign: 'center',
        transition: 'background .2s',
        width: '14.28574%',
        $states: {
          outside: {
            opacity: .7,
          },
          active: {
            background: this.theme.colorMod(.1, params.colors.body.color),
            borderColor: this.theme.colorMod(.1, params.colors.border.color),
            boxShadow: `0 0 7px 0 rgba(0, 0, 0, .2)`,
            fontWeight: 600,
          },
        },
      },
    };
  }

}
