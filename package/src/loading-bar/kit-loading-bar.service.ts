import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class KitLoadingBarService {
  ends = new Subject<string>();

  starts = new Subject<string>();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.start('Router');
      }
      if (event instanceof NavigationEnd) {
        this.end('Router');
      }
    });
  }

  /**
   * Finish loading animation.
   *
   * @publicApi
   */
  end(key: string) {
    this.ends.next(key);
  }

  /**
   * Start loading animation.
   *
   * @publicApi
   */
  start(key: string) {
    this.starts.next(key);
  }
}
