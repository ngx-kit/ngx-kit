import { Injectable } from '@angular/core';
import { mergeDeep, mergeDeepAll, StylerColorService, StylerService } from '@ngx-kit/styler';
import { KitThemeColor, KitThemeService } from '../core/meta/theme';
import { defaultParams } from './default-params';
import { KitDefaultThemeCustomizer, KitDefaultThemeParams } from './meta';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {
  overlayCloseAnimationTimings = '150ms cubic-bezier(0.4, 0.0, 1, 1)';

  overlayOpenAnimationTimings = '150ms cubic-bezier(0.0, 0.0, 0.2, 1)';

  private _params: KitDefaultThemeParams = mergeDeep({}, defaultParams);

  constructor(private color: StylerColorService,
              private stylerService: StylerService) {
  }

  get params() {
    return this._params;
  }

  colorMod(amount: number, color: string): string {
    return this.color[this._params.colorMod.type](amount * this._params.colorMod.ratio, color);
  }

  // @todo params validation + fault tolerance
  customize(params: KitDefaultThemeCustomizer) {
    this._params = mergeDeepAll([{}, defaultParams, params], {
      // do not merge arrays
      arrayMerge: (target: any, source: any) => {
        return mergeDeep({}, source);
      },
    });
    this.stylerService.updateComponents();
  }

  getColor(name: string): KitThemeColor {
    const color = this._params.colors.find(c => c.name === name);
    if (color) {
      return color;
    } else {
      throw new Error(`Color ${name} not found!`);
    }
  }
}
