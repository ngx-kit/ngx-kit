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
    this.compileRaws();
  }

  get params() {
    return this._params;
  }

  colorMod(amount: number, color: string): string {
    return this.color[this._params.colorMod.type](amount * this._params.colorMod.ratio, color);
  }

  compileRaws() {
//    // body
//    const bodyColor = this.getColor(this.params.raws.bodyColor);
//    this.stylerService.setRaw('body', {
//      background: bodyColor.background,
//      color: bodyColor.text,
//      fontSize: this.params.raws.bodyFontSize,
//    });
//    // headers
//    for (const tag in this.params.raws.headersSizes) {
//      this.stylerService.setRaw(tag, {
//        fontSize: this.params.raws.headersSizes[tag],
//      });
//    }
//    // links
//    const linkColor = this.getColor(this.params.raws.linkColor);
//    this.stylerService.setRaw('a', {
//      background: linkColor.background,
//      color: linkColor.text,
//    });
//    this.stylerService.setRaw('a:hover', {
//      color: this.colorMod(.1, linkColor.text),
//    });
  }

  customize(params: KitDefaultThemeCustomizer) {
    this._params = mergeDeepAll([{}, defaultParams, params]);
    this.compileRaws();
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
