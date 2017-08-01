import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeDefaultParams, KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { DarkPresetParams } from './presets/dark-preset-params';

@Injectable()
export class ThemeService {
  params: {
    sideWidth: number;
    contentColor: string;
    headerColor: string;
    sideColor: string;
    footerColor: string;
    logoColor: string;
  };

  constructor(@Inject(kitTheme) private kitThemeService: KitDefaultThemeService) {
  }

  applyTheme(name: string) {
    switch (name) {
      case 'default': {
        const preset = new KitDefaultThemeDefaultParams();
        this.params = {
          sideWidth: 250,
          contentColor: preset.colors.white,
          headerColor: preset.colors.grey1,
          sideColor: preset.colors.grey1,
          footerColor: preset.colors.grey2,
          logoColor: preset.colors.blue1,
        };
        this.kitThemeService.applyParams(preset);
        break;
      }
      case 'dark': {
        const preset = new DarkPresetParams();
        this.params = {
          sideWidth: 250,
          contentColor: preset.colors.dark3,
          headerColor: preset.colors.dark2,
          sideColor: preset.colors.dark2,
          footerColor: preset.colors.dark1,
          logoColor: preset.colors.blue1,
        };
        this.kitThemeService.applyParams(preset);
        break;
      }
    }
  }
}
