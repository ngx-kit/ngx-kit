import { Platform } from '@angular/cdk/platform';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map, take, tap } from 'rxjs/operators';
import { EvoIcon, EvoIconCached, EvoIconSource } from './meta';

/**
 *
 * Icons registry.
 *
 * ```typescript
 * this.iconsRegistry.add({name: 'star', url: '/assets/icons/star.svg'});
 * // or
 * this.iconsRegistry.add([
 * {name: 'star', url: '/assets/icons/star.svg'},
 * {name: 'cloud', url: '/assets/icons/cloud.svg'},
 * ]);
 * ```
 *
 * Use in a template
 *
 * ```html
 * <kit-icon name="star"></kit-icon>
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EvoIconsRegistry {
  private cache: EvoIconCached[] = [];

  private icons: EvoIcon[] = [];

  constructor(
    private http: HttpClient,
    private platform: Platform,
  ) {
  }

  /**
   * Add icons to registry.
   */
  add(icon: EvoIcon | EvoIcon[]) {
    const icons = Array.isArray(icon) ? icon : [icon];
    // Validate
    icons.forEach(i => {
      if (!i.url && !i.xml) {
        throw new Error('KitIconsRegistryService: icon registration requires url or xml.');
      }
    });
    // Merge
    this.icons = [...this.icons, ...icons];
  }

  /**
   * Get icon by name.
   *
   * @internal
   */
  get(name: string): Observable<EvoIconSource> {
    const icon = this.icons.find(i => i.name === name);
    if (icon) {
      // Init cache
      const fromCache = this.cache.find(c => c.name === name);
      const cached = fromCache
        ? fromCache
        : {
          name,
          svg: new BehaviorSubject(null),
        };
      if (!fromCache) {
        // Add cached to the pull
        this.cache.push(cached);
        if (icon.url) {
          if (this.platform.isBrowser) {
            // Fetch
            return this.http
              .get(icon.url, {responseType: 'text'})
              .pipe(
                tap(svg => cached.svg.next(svg)),
                map(svg => ({svg, size: icon.size})),
                catchError((error: HttpErrorResponse) => {
                  throw new Error(`Svg load failed, url: ${icon.url}, message: ${error.message}`);
                }),
              );
          } else {
            return of({svg: ''});
          }
        } else if (icon.xml) {
          // Register xml
          cached.svg.next(icon.xml);
        }
      }
      // Return stream
      return cached.svg
        .asObservable()
        .pipe(
          filter(svg => svg !== null),
          take(1),
          map((svg: string) => ({svg, size: icon.size})),
        );
    } else {
      throw new Error(`Icon "${name}" not found!`);
    }
  }
}
