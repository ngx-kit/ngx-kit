import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultTypoContainerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.moduleTypo.colors.text.background,
      color: params.moduleTypo.colors.text.text,
      fontSize: params.moduleTypo.fontSize,
      $nest: {
        '& a': {
          color: params.moduleTypo.colors.link.base.text,
          background: params.moduleTypo.colors.link.base.background,
        },
        '& a:hover': {
          color: params.moduleTypo.colors.link.hover.text,
          background: params.moduleTypo.colors.link.hover.background,
        },
        '& a:focus': {
          color: params.moduleTypo.colors.link.focus.text,
          background: params.moduleTypo.colors.link.focus.background,
        },
        '& a:visited': {
          color: params.moduleTypo.colors.link.visited.text,
          background: params.moduleTypo.colors.link.visited.background,
        },
        '& h1': {
          fontSize: params.moduleTypo.headingFontSizes.h1,
        },
        '& h2': {
          fontSize: params.moduleTypo.headingFontSizes.h2,
        },
        '& h3': {
          fontSize: params.moduleTypo.headingFontSizes.h3,
        },
        '& h4': {
          fontSize: params.moduleTypo.headingFontSizes.h4,
        },
        '& h5': {
          fontSize: params.moduleTypo.headingFontSizes.h5,
        },
        '& h6': {
          fontSize: params.moduleTypo.headingFontSizes.h6,
        },
      },
    };
  }
}
