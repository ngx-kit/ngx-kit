import { Inject, Injectable, NgZone, Optional } from '@angular/core';
import { from, Observable } from 'rxjs';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { kitMqBreakpoints, KitMqParams } from './meta';

const breakpointsError =
  'Provide breakpoints for KitMqService:\n' +
  'providers: [\n' +
  '  {\n' +
  '    provide: kitMqBreakpoints,\n' +
  '    useValue: {\n' +
  '      mobile: \'320px\',\n' +
  '      tablet: \'740px\',\n' +
  '      desktop: \'980px\',\n' +
  '      wide: \'1300px\',\n' +
  '    }\n' +
  '  }\n' +
  ']';

/**
 * Check or observe media query.
 *
 * ### Usage
 *
 * Provide breakpoints in the root module:
 *
 * ```typescript
 * ...
 * providers: [
 *   {
 *     provide: kitMqBreakpoints,
 *     useValue: {
 *       mobile: '320px',
 *       tablet: '740px',
 *       desktop: '980px',
 *       wide: '1300px',
 *     },
 *   },
 * ],
 * ```
 *
 * Set of breakpoint is a fully customizable.
 *
 * Use the service:
 *
 * ```typescript
 * constructor(private mq: KitMqService) {
 * }
 * ...
 * // Check
 * const matches = this.mq.check({from: 'mobile', until: 'tablet'});
 * ...
 * // Observe
 * this.mq.observe({from: 'tablet'}).subscribe(matches => {
 * });
 * ```
 *
 * @todo remove mq observer on destroy
 */
@Injectable({
  providedIn: 'root',
})
export class KitMqService {
  private matchMedia: ((mediaQuery: string) => MediaQueryList);

  private mqs = new Map<string, MediaQueryList>();

  constructor(
    private platform: KitPlatformService,
    private zone: NgZone,
    @Optional() @Inject(kitMqBreakpoints) private breakpoints: any,
  ) {
    if (!this.breakpoints) {
      throw new Error(breakpointsError);
    }
    if (this.platform.isBrowser() && 'matchMedia' in window) {
      this.matchMedia = window.matchMedia.bind(window);
    }
  }

  check(params: KitMqParams) {
    if (this.platform.isServer()) {
      return !!params.server;
    } else {
      return this.checkRaw(this.buildQuery(params));
    }
  }

  checkRaw(mediaQuery: string): boolean | null {
    if (this.matchMedia) {
      const mq = this.getMq(mediaQuery);
      return mq.matches;
    } else {
      return null;
    }
  }

  observe(params: KitMqParams): Observable<boolean | null> {
    if (this.platform.isServer()) {
      return from([!!params.server]);
    } else {
      return this.observeRaw(this.buildQuery(params));
    }
  }

  observeRaw(mediaQuery: string): Observable<boolean | null> {
    return new Observable((observer) => {
      if (this.matchMedia) {
        const listener = (e: MediaQueryListEvent) => {
          this.zone.run(() => {
            observer.next(e.matches);
          });
        };
        const mq = this.getMq(mediaQuery);
        observer.next(mq.matches);
        mq.addListener(listener);
      } else {
        observer.next(null);
        observer.complete();
      }
    });
  }

  private buildQuery(params: KitMqParams) {
    if (!params.from && !params.until) {
      throw new Error(`KitMqService: invalid mq params`);
    }
    let query = '';
    // Compile media type
    if (params.type) {
      query = `${params.type}`;
    }
    // Compile from
    if (params.from) {
      if (!this.breakpoints[params.from]) {
        throw new Error(`KitMqService: breakpoint "${params.from}" has not been registered!`);
      }
      query = this.concatQuery(query, `(min-width: ${this.breakpoints[params.from]})`);
    }
    // Compile until
    if (params.until) {
      if (!this.breakpoints[params.until]) {
        throw new Error(`KitMqService: breakpoint "${params.until}" has not been registered!`);
      }
      query = this.concatQuery(query, `(max-width: ${this.breakpoints[params.until]})`);
    }
    // Compile "and"
    if (params.and) {
      query = this.concatQuery(query, params.and);
    }
    return query;
  }

  private concatQuery(query: string, attach: string) {
    return query && query.length > 0 ? `${query} and ${attach}` : attach;
  }

  private getMq(query: string) {
    let mq = this.mqs.get(query);
    if (!mq) {
      mq = this.matchMedia(query);
      this.mqs.set(query, mq);
    }
    return mq;
  }
}
