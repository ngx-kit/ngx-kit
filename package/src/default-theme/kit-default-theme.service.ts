import { Injectable } from '@angular/core';
import { StylerColorService } from '@ngx-kit/styler';
import { KitThemeColor, KitThemeService } from '../core/meta/theme';
import { KitDefaultThemeParams } from './meta';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {
  overlayCloseAnimationTimings = '150ms cubic-bezier(0.4, 0.0, 1, 1)';

  overlayOpenAnimationTimings = '150ms cubic-bezier(0.0, 0.0, 0.2, 1)';

  private _params: KitDefaultThemeParams = {
    grid: {
      v: 8,
      h: 8,
    },
    colors: [
      {
        name: 'brand',
        background: '#0084ff',
        text: '#ffffff',
        border: '#0084ff',
      },
      {
        name: 'body',
        background: '#fff',
        text: '#444',
        border: '#eee',
      },
      {
        name: 'input',
        background: '#f7f7f7',
        text: '#585858',
        border: '#eee',
      },
      {
        name: 'button',
        background: '#e2e2e2',
        text: '#585858',
        border: '#dadada',
      },
      {
        name: 'disabled',
        background: '#ccc',
        text: '#585858',
        border: '#aaa',
      },
      {
        name: 'success',
        background: '#2dc100',
        text: '#ffffff',
        border: '#2dc100',
      },
      {
        name: 'warning',
        background: '#ffb62f',
        text: '#ffffff',
        border: '#ffb62f',
      },
      {
        name: 'error',
        background: '#ff5500',
        text: '#ffffff',
        border: '#ffb62f',
      },
    ],
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
      },
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
    modules: {
      autoComplete: {
        resultsColor: 'body',
      },
      badge: {
        defaultColor: 'brand',
      },
      buttons: {
        defaultColor: 'button',
        disabledColor: 'disabled',
      },
      checkbox: {
        color: 'input',
        checkedColor: 'brand',
      },
      datePicker: {
        color: 'input',
      },
      dropdownMenu: {
        menuColor: 'body',
      },
      form: {
        errorColor: 'error',
      },
      input: {
        color: 'input',
      },
      menu: {
        color: 'body',
      },
      radio: {
        color: 'input',
        checkedColor: 'brand',
      },
      select: {
        color: 'button',
      },
      textarea: {
        color: 'input',
      },
      toggle: {
        color: 'input',
        checkedColor: 'brand',
      },
    },
  };

  constructor(private color: StylerColorService) {
  }

  get params() {
    return this._params;
  }

  colorMod(amount: number, color: string): string {
    return this.color[this._params.colorMod.type](amount * this._params.colorMod.ratio, color);
  }

  customize(params: KitDefaultThemeParams) {
    this._params = params;
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
