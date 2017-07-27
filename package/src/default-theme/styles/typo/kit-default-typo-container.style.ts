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
    const typoParams = this.theme.params.modules.typo;
    const textColor = this.theme.getColor(typoParams.textColor);
    const linkColor = this.theme.getColor(typoParams.linkColor);
    return {
      color: textColor.text,
      fontSize: typoParams.fontSize,
      $nest: {
        '& a': {
          color: linkColor.text,
          background: linkColor.background,
        },
        '& a:hover': {
          color: this.theme.colorMod(.1, linkColor.text),
        },
        '& h1': {
          fontSize: typoParams.headingFontSizes.h1,
        },
        '& h2': {
          fontSize: typoParams.headingFontSizes.h2,
        },
        '& h3': {
          fontSize: typoParams.headingFontSizes.h3,
        },
        '& h4': {
          fontSize: typoParams.headingFontSizes.h4,
        },
        '& h5': {
          fontSize: typoParams.headingFontSizes.h5,
        },
        '& h6': {
          fontSize: typoParams.headingFontSizes.h6,
        },
      },
    };
  }
}
