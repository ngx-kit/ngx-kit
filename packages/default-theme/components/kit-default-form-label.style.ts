import { Inject, Injectable } from '@angular/core';

import { KitFormLabelStyle, KitFormLabelStyleDef, kitTheme } from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultFormLabelStyle implements KitFormLabelStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitFormLabelStyleDef {
    const params = this.theme.params;
    return {
      host: {},
    };
  }

}
