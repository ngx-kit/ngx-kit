import { Injectable } from '@angular/core';
import { StylerColorService, StylerService } from '@ngx-kit/styler';
import { KitThemeService } from '../core/meta/theme';
import { KitDefaultThemeDefaultParams } from './default-params';
import { KitDefaultThemeParams } from './meta';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {
  overlayCloseAnimationTimings = '150ms cubic-bezier(0.4, 0.0, 1, 1)';

  overlayOpenAnimationTimings = '150ms cubic-bezier(0.0, 0.0, 0.2, 1)';

  private _params: KitDefaultThemeParams;

  constructor(private color: StylerColorService,
              private stylerService: StylerService) {
    this.applyParams(new KitDefaultThemeDefaultParams());
  }

  get params(): KitDefaultThemeParams {
    return this._params;
  }

  applyParams(paramsFactory: KitDefaultThemeParams) {
    const params: any = {};
    for (const key in paramsFactory) {
      params[key] = paramsFactory[key];
    }
    this._params = params;
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
}
