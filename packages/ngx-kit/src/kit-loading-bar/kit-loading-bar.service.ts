import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class KitLoadingBarService {
  private _barState$ = new Subject<string>();

  private _end$ = new Subject<string>();

  private _start$ = new Subject<string>();

  private lastKey: string;

  constructor(private router: Router) {
    // handle barState
    this._start$.subscribe((key: string) => {
      this.lastKey = key;
      this._barState$.next('in-progress');
    });
    this._end$.subscribe((key: string) => {
      if (key === this.lastKey) {
        this._barState$.next('none');
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

  get barState$(): Observable<string> {
    return this._barState$.asObservable();
  }

  get end$(): Observable<string> {
    return this._end$.asObservable();
  }

  get start$(): Observable<string> {
    return this._start$.asObservable();
  }

  /**
   * Finish loading animation.
   *
   * @publicApi
   */
  end(key: string) {
    this._end$.next(key);
  }

  /**
   * Start loading animation.
   *
   * @publicApi
   */
  start(key: string) {
    this._start$.next(key);
  }
}
