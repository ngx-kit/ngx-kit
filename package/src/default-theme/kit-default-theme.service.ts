import { Injectable } from '@angular/core';
import { mergeDeepAll, StylerColorService, StylerService } from '@ngx-kit/styler';
import { KitThemeService } from '../core/meta/theme';
import { isObject } from '../core/util/is-object';
import { KitDefaultThemeDefaultParams } from './default-params';
import { KitDefaultThemeParams, KitDefaultThemeParamsDef } from './meta';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {
  overlayCloseAnimationTimings = '150ms cubic-bezier(0.4, 0.0, 1, 1)';

  overlayOpenAnimationTimings = '150ms cubic-bezier(0.0, 0.0, 0.2, 1)';

  private _defaultParams: KitDefaultThemeParams;

  private _params: KitDefaultThemeParams;

  constructor(private color: StylerColorService,
              private stylerService: StylerService) {
    this._defaultParams = this.extractParams(new KitDefaultThemeDefaultParams());
    this.applyParams(new KitDefaultThemeDefaultParams());
  }

  get params(): KitDefaultThemeParams {
    return this._params;
  }

  applyParams(params: KitDefaultThemeParamsDef) {
    this._params = this.mergeParams(this._defaultParams, this.extractParams(params));
    this.stylerService.updateComponents();
  }

  getModuleColor(module: string, colorIndex: string | null) {
    const moduleColors = this._params[`module${module}`].colors;
    if (!moduleColors) {
      throw new Error(`"module${module}.colors" not found in params!`);
    }
    if (colorIndex) {
      const color = moduleColors[colorIndex];
      if (!color) {
        throw new Error(`Color "${colorIndex}" not found in module "${module}"!`);
      }
      return color;
    } else {
      return moduleColors[Object.keys(moduleColors)[0]];
    }
  }

  private extractParams(params: any, isColors = false) {
    const extracted = {};
    for (const key in params) {
      if (params[key]) {
        if (key === 'colors') {
          isColors = true;
        }
        extracted[key] = isObject(params[key])
            ? this.extractParams(params[key], isColors)
            : params[key];
      }
    }
    return params;
  }

  private mergeParams(left: KitDefaultThemeParams, right: KitDefaultThemeParamsDef): KitDefaultThemeParams {
    return mergeDeepAll([{}, left, right]);
  }
}
