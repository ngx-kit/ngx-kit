import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultDatePickerStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  years(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      lineHeight: 30,
    };
  }

  year(state: {type: 'change' | 'current'}): StyleDef {
    return {
      border: `1px solid ${this.theme.params.colors.border.color}`,
      ...this.def.pick(state.type, {
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
      }),
    }
  }

  months(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      lineHeight: 30,
    };
  }

  month(state: {type: 'change' | 'current'}): StyleDef {
    return {
      border: `1px solid ${this.theme.params.colors.border.color}`,
      ...this.def.pick(state.type, {
        change: {
          cursor: 'pointer',
          padding: '0 4px',
        },
        current: {
          flexGrow: 1,
          fontWeight: 600,
          fontSize: '1.15rem',
          textAlign: 'center',
        }
      }),
    };
  }

  weekdays(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
    };
  }

  weekday(): StyleDef {
    return {
      border: `1px solid ${this.theme.params.colors.border.color}`,
      boxSizing: 'border-box',
      cursor: 'pointer',
      flexShrink: 0,
      padding: 4,
      textAlign: 'center',
      transition: 'background .2s',
      width: '14.28574%',
    };
  }

  dates(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
  }

  date(state: {outside: boolean, active: boolean}): StyleDef {
    return this.def.merge([
      {
        border: `1px solid ${this.theme.params.colors.border.color}`,
        boxSizing: 'border-box',
        cursor: 'pointer',
        flexShrink: 0,
        padding: 4,
        textAlign: 'center',
        transition: 'background .2s',
        width: '14.28574%',
        $nest: {
          '&:hover': {
            background: this.theme.colorMod(.04, this.theme.params.colors.body.color),
          }
        },
      },
      this.def.toggle(state.outside, {
        opacity: .7,
      }),
      this.def.toggle(state.active, {
        background: this.theme.colorMod(.1, this.theme.params.colors.body.color),
        borderColor: this.theme.colorMod(.1, this.theme.params.colors.border.color),
        boxShadow: `0 0 7px 0 rgba(0, 0, 0, .2)`,
        cursor: 'default',
        fontWeight: 600,
        $nest: {
          '&:hover': {
            background: this.theme.colorMod(.1, this.theme.params.colors.body.color),
          },
        },
      }),
    ]);
  }

}
