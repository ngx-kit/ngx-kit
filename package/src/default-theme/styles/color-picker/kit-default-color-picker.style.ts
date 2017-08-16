import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { alphaImage } from './alpha-image';
import { hueImage } from './hue-image';
import { saturationImage } from './saturation-image';

@Injectable()
export class KitDefaultColorPickerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  alpha(): StyleDef {
    const params = this.theme.params;
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${alphaImage}')`,
      border: 'none',
      cursor: 'pointer',
      height: params.moduleColorPicker.sliderHeight,
      marginTop: params.grid.v,
      width: '100%',
    }
  }

  cursor(): StyleDef {
    const params = this.theme.params;
    return {
      cursor: 'default',
      height: params.moduleColorPicker.sliderHeight,
      position: 'relative',
      width: params.moduleColorPicker.sliderHeight,
      padding: (params.moduleColorPicker.sliderHeight - params.moduleColorPicker.cursorSize) / 2,
      boxSizing: 'border-box',
      $nest: {
        '&:after': {
          content: '" "',
          display: 'block',
          background: params.moduleColorPicker.colors.cursor.background,
          border: [params.borders.width, 'solid', params.moduleColorPicker.colors.cursor.border],
          borderRadius: '50%',
          boxShadow: '0 0 6px 0 rgba(0,0,0, .5)',
          boxSizing: 'border-box',
          height: params.moduleColorPicker.cursorSize,
          width: params.moduleColorPicker.cursorSize,
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
    const params = this.theme.params;
    return {
      backgroundSize: '100% 100%',
      backgroundImage: `url('${hueImage}')`,
      border: 'none',
      cursor: 'pointer',
      height: params.moduleColorPicker.sliderHeight,
      marginTop: params.grid.v,
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
