import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';
import { alphaImage } from './alpha-image';
import { hueImage } from './hue-image';
import { saturationImage } from './saturation-image';

@Injectable()
export class KitCoreColorPickerStyle implements KitComponentStyle {
  alpha(): StyleDef {
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${alphaImage}')`,
      border: 'none',
      cursor: 'pointer',
      height: 16,
      width: '100%',
    }
  }

  cursor(): StyleDef {
    const sliderHeight = 16;
    const cursorSize = 10;
    return {
      cursor: 'default',
      height: sliderHeight,
      position: 'relative',
      width: sliderHeight,
      padding: (sliderHeight - cursorSize) / 2,
      boxSizing: 'border-box',
      $nest: {
        '&:after': {
          content: '" "',
          display: 'block',
          background: '#fff',
          borderRadius: '50%',
          boxSizing: 'border-box',
          height: cursorSize,
          width: cursorSize,
        },
      },
    };
  }

  host(): StyleDef {
    return {
      display: 'block',
    };
  }

  hue(): StyleDef {
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${hueImage}')`,
      border: 'none',
      cursor: 'pointer',
      height: 16,
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
