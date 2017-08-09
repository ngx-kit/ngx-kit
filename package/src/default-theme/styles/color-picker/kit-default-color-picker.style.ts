import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { alphaImage } from './alpha-image';
import { hueImage } from './hue-image';
import { saturationImage } from './saturation-image';

@Injectable()
export class KitDefaultColorPickerStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  alpha(): StyleDef {
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${alphaImage}')`,
      border: 'none',
      cursor: 'pointer',
      height: 16,
      marginTop: 8,
      width: '100%',
    }
  }

  cursor(): StyleDef {
    const dotSize = 10;
    return {
      cursor: 'default',
      height: 16,
      position: 'relative',
      width: 16,
      padding: (16 - dotSize) / 2,
      boxSizing: 'border-box',
      $nest: {
        '&:after': {
          content: '" "',
          display: 'block',
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 6px 0 rgba(0,0,0, .5)',
          height: dotSize,
          width: dotSize,
        }
      }
    };
  }

  host(): StyleDef {
    return {
      display: 'block'
    };
  }

  hue(): StyleDef {
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${hueImage}')`,
      border: 'none',
      cursor: 'pointer',
      height: 16,
      marginTop: 8,
      width: '100%',
    }
  }

  saturation(): StyleDef {
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${saturationImage}')`,
      border: 'none',
      cursor: 'pointer',
      width: '100%',
    };
  }
}
