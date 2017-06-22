import { Injectable } from '@angular/core';

import { KitThemeService } from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeParams } from './interfaces';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {

  private _params: KitDefaultThemeParams = {
    grid: {
      v: 8,
      h: 8,
    },
    colors: {
      body: {
        color: '#ffffff',
        text: '#333333',
      },
      brand: {
        color: '#0084ff',
        text: '#ffffff',
      },
      link: {
        color: 'transparent',
        text: '#0084ff',
      },
      button: {
        color: '#f7f7f7',
        text: '#585858',
      },
      border: {
        color: '#b6b9c2',
        text: '#63656f',
      },
      success: {
        color: '#2dc100',
        text: '#ffffff',
      },
      warning: {
        color: '#ffb62f',
        text: '#ffffff',
      },
      error: {
        color: '#ff5500',
        text: '#ffffff',
      }
    },
    colorMod: {
      type: 'darken',
      ratio: 1,
    },
    shadows: {
      element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
      deep: '0 0 20px 0 rgba(50, 50, 50, 0.1)',
      overlay: '0 0 6px 0 rgba(50, 50, 50, 0.1)',
    },
    typo: {
      bodyFontSize: '13px',
      primaryFontSize: '1rem',
      secondaryFontSize: '.9rem',
      headers: {
        h1: '3rem',
        h2: '2rem',
        h3: '1.8rem',
        h4: '1.6rem',
        h5: '1.4rem',
        h6: '1rem',
      }
    },
    border: {
      width: 1,
      radius: {
        s: 2,
        m: 6,
        l: 12,
      },
    },
    transitions: {
      default: 'all .3s',
    },
  };

  constructor(private color: StylerColorService) {
  }

  customize(params: KitDefaultThemeParams) {
    this._params = params;
  }

  get params() {
    return this._params;
  }

  colorMod(amount: number, color: string): string {
    return this.color[this._params.colorMod.type](amount * this._params.colorMod.ratio, color);
  }

}
