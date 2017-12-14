import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { KitIconsRegistryService } from '@ngx-kit/core';
import { distinctUntilChanged } from 'rxjs/operators';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  hljsTheme = 'hljs-theme-default';

  constructor(
    private icons: KitIconsRegistryService,
    private router: Router,
  ) {
    // icons & theme
    this.icons.registerSet([
      {
        name: 'git',
        url: '/assets/github-sign.svg',
      },
      {
        name: 'menu',
        url: '/assets/menu.svg',
      },
    ]);
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
}
