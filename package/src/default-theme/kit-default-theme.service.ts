import { Injectable } from '@angular/core';
import { StylerService } from '@ngx-kit/styler';
import { KitThemeService } from '../core/meta/theme';
import { isObject } from '../core/util/is-object';
import { mergeDeepAll } from '../core/util/merge-deep';
import { KitDefaultThemeDefaultParams } from './default-params';
import { KitDefaultThemeParams, KitDefaultThemeParamsDef } from './meta/params';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {
  overlayCloseAnimationTimings = '150ms cubic-bezier(0.4, 0.0, 1, 1)';

  overlayOpenAnimationTimings = '150ms cubic-bezier(0.0, 0.0, 0.2, 1)';

  private _defaultParams: KitDefaultThemeParams;

  private _params: KitDefaultThemeParams;

  constructor(private stylerService: StylerService) {
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

  mergeParams(left: KitDefaultThemeParams, right: KitDefaultThemeParamsDef): KitDefaultThemeParams {
    return mergeDeepAll([{}, left, right]);
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
}
