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
              name: 'body',
              background: '#444',
              text: '#ddd',
              border: '#666',
            },
            {
              name: 'brand',
              background: '#5cdbff',
              text: '#323232',
              border: '#5cdbff',
            },
            {
              name: 'link',
              background: 'transparent',
              text: '#5cdbff',
              border: 'transparent',
            },
          ],
        });
        break;
    }
  }
}
