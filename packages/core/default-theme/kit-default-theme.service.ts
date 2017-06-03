import { Injectable } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { KitThemeService } from '../interfaces';
import { KitButtonStyler } from './kit-button.styler';
import { KitDefaultThemeParams } from './interfaces';

@Injectable()
export class KitDefaultThemeService implements KitThemeService {

  private params: KitDefaultThemeParams = {
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
    shadows: {
      element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
      deep: '',
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
  };

  private stylers = {
    button: KitButtonStyler.style,
  };

  constructor() {
  }

  customize(params: KitDefaultThemeParams) {
    this.params = params;
  }

  style(name: string, component: StylerComponent) {
    if (this.stylers[name]) {
      this.stylers[name](component, this.params);
    } else {
      throw new Error(`Kit.Core.DefaultTheme: Styler for component "${name} not found!"`);
    }
  }

}