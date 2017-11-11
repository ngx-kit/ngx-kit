import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { KitIconsRegistryService } from '@ngx-kit/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { ThemeService } from '../core/theme.service';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  hljsTheme = 'hljs-theme-default';

  constructor(private theme: ThemeService,
              private icons: KitIconsRegistryService,
              private router: Router) {
    // icons & theme
    this.icons.registerSet([
      {
        name: 'git',
        url: '/assets/github-sign.svg',
      },
    ]);
    this.theme.applyTheme('default');
    // google analytics
    router.events
        .pipe(
            distinctUntilChanged((previous: any, current: any) => {
              if (current instanceof NavigationEnd) {
                return previous.url === current.url;
              }
              return true;
            }),
        )
        .subscribe((x: any) => {
          if (typeof gtag !== 'undefined') {
            gtag('config', 'UA-26418434-15', {'page_path': x.url});
          }
        });
  }

  applyTheme(name: string) {
    this.hljsTheme = `hljs-theme-${name}`;
    this.theme.applyTheme(name);
  }
}
