import { Injectable } from '@angular/core';

import { StylerService } from '@ngx-kit/styler';

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
        color: '#9ea1aa',
        text: '#494b54',
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
    }
  };

  private stylers = {
    button: KitButtonStyler.style,
  };

  constructor() {
  }

  style(component: string, styler: StylerService) {
    if (this.stylers[component]) {
      this.stylers[component](styler, this.params);
    } else {
      throw new Error(`Kit.Core.DefaultTheme: Styler for component "${component} not found!"`);
    }
  }

}