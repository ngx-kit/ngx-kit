import { StylerComponent } from '@ngx-kit/styler';

import { KitDefaultThemeParams } from '../interfaces';

export class KitSelectStyler {

  static style(styler: StylerComponent, params: KitDefaultThemeParams) {
    styler.register({
      host: {},
      option: {
        border: `${params.border.width}px solid ${params.colors.border.color}`,
        borderRadius: params.border.radius.s,
        cursor: 'pointer',
        marginBottom: params.grid.v / 2,
        padding: `${params.grid.v / 2}px ${params.grid.h}px`,
        transition: 'background 0.2s',
        $states: {
          selected: {
            background: '#eaecf6',
            borderColor: '#cbcdd7',
          },
        },
      },
    });
  }

}
