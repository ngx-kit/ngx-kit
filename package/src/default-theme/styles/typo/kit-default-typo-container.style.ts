import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultTypoContainerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.typo;
    return {
      fontSize: params.moduleTypo.fontSize,
      ...applyTypoColorSet(colors.text),
      $nest: {
        '& a': {
          ...applyTypoColorSet(colors.link.base),
        },
        '& a:hover': {
          ...applyTypoColorSet(colors.link.hover),
        },
        '& a:focus': {
          ...applyTypoColorSet(colors.link.focus),
        },
        '& a:visited': {
          ...applyTypoColorSet(colors.link.visited),
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
