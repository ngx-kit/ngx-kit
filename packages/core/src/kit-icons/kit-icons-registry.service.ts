import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { isArray } from '../util/is-array';
import { KitIcon, KitIconCached, KitIconSource } from './meta';

/**
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
export class KitIconsRegistryService {
  private cache: KitIconCached[] = [];

  private icons: KitIcon[] = [];

  constructor(private http: HttpClient) {
  }

  /**
   * Add icons to registry.
   */
  add(icon: KitIcon | KitIcon[]) {
    const icons = isArray(icon) ? icon : [icon];
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
  get(name: string): Observable<KitIconSource> {
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
          // Fetch
          return this.http.get(icon.url, {responseType: 'text'})
            .pipe(
              tap(svg => cached.svg.next(svg)),
              map(svg => ({svg, size: icon.size})),
            );
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
