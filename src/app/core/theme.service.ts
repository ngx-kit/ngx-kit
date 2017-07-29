import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';

@Injectable()
export class ThemeService {
  defaultThemeParams = {
    sideWidth: 250,
    headerColor: '#eee',
    footerColor: '#ddd',
    sideColor: '#eee',
    contentColor: '#fff',
  };

  params = {...this.defaultThemeParams};

  constructor(@Inject(kitTheme) private kitTheme: KitDefaultThemeService) {
  }

  applyTheme(name: string) {
    switch (name) {
      case 'default':
        this.params = {...this.defaultThemeParams};
        this.kitTheme.customize({});
        break;
      case 'default-compact':
        // @todo add typo
        this.params = {...this.defaultThemeParams};
        this.kitTheme.customize({
          grid: {
            v: 2,
            h: 4,
          },
        });
        break;
      case 'dark':
        this.params = {
          ...this.defaultThemeParams,
          contentColor: '#444',
          headerColor: '#222',
          sideColor: '#222',
          footerColor: '#111',
        };
        this.kitTheme.customize({
          colors: [
            {
              name: 'brand',
              background: '#0080FF',
              text: '#ffffff',
              border: '#0080FF',
            },
            {
              name: 'body',
              background: '#444',
              text: '#ddd',
              border: '#666',
            },
            {
              name: 'link',
              background: 'transparent',
              text: '#5cdbff',
              border: 'transparent',
            },
            {
              name: 'input',
              background: '#55575a',
              text: '#ffffff',
              border: '#898989',
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
              name: 'panel',
              background: '#212121',
              text: '#ddd',
              border: '#333',
            },
            {
              name: 'success',
              background: '#36C77C',
              text: '#ffffff',
              border: '#36C77C',
            },
            {
              name: 'warning',
              background: '#E15E3A',
              text: '#ffffff',
              border: '#E15E3A',
            },
            {
              name: 'error',
              background: '#FC5241',
              text: '#ffffff',
              border: '#FC5241',
            },
          ],
        });
        break;
    }
  }
}
