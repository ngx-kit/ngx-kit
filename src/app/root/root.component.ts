import { Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { ThemeService } from '../core/theme.service';
import { LayoutStyle } from '../shared/layout/layout.style';
import { RootStyle } from './root.style';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(RootStyle),
  ],
})
export class RootComponent {
  hljsTheme = 'hljs-theme-default';

  constructor(private theme: ThemeService,
              private icons: KitIconsRegistryService) {
    this.icons.registerSet([
      {
        name: 'git',
        url: '/assets/github-sign.svg',
      },
    ]);
    this.theme.applyTheme('default');
  }

  applyTheme(name: string) {
    this.hljsTheme = `hljs-theme-${name}`;
    this.theme.applyTheme(name);
  }
}
