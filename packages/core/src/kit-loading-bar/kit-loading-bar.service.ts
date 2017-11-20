import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitLoadingBarState } from './meta';

@Injectable()
export class KitLoadingBarService {
  private _barStateChanges = new Subject<string>();

  private _ends = new Subject<string>();

  private _starts = new Subject<string>();

  private lastKey: string;

  constructor(private router: Router) {
    // handle barState
    this._starts.subscribe((key: string) => {
      this.lastKey = key;
      this._barStateChanges.next(KitLoadingBarState.InProgress);
    });
    this._ends.subscribe((key: string) => {
      if (key === this.lastKey) {
        this._barStateChanges.next(KitLoadingBarState.None);
      }
    });
    // subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.start('Router');
      }
      if (event instanceof NavigationEnd) {
        this.end('Router');
      }
    });
  }

  get barStateChanges(): Observable<string> {
    return this._barStateChanges.asObservable();
  }

  get ends(): Observable<string> {
    return this._ends.asObservable();
  }

  get starts(): Observable<string> {
    return this._starts.asObservable();
  }

  /**
   * Finish loading animation.
   *
   * @publicApi
   */
  end(key: string) {
    this._ends.next(key);
  }

  /**
   * Start loading animation.
   *
   * @publicApi
   */
  start(key: string) {
    this._starts.next(key);
  }
}
