import { Component } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { ThemeService } from '../core/theme.service';
import { RootStyle } from './root.style';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  viewProviders: [
    StylerModule.forComponent(RootStyle),
  ],
})
export class RootComponent {
  hljsTheme = 'hljs-theme-default';

  constructor(private theme: ThemeService) {
  }

  applyTheme(name: string) {
    this.hljsTheme = `hljs-theme-${name}`;
    this.theme.applyTheme(name);
  }
}
