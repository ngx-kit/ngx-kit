import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { isArray } from '../util/is-array';
import { KitIcon, KitIconCached, KitIconNode } from './meta';

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
 *
 * @todo cache pending (avoid parallel loading of same icon)
 */
@Injectable()
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
    this.icons = [...this.icons, ...icons];
  }

  /**
   * Register icon.
   *
   * @deprecated Use `.add()`
   *
   * @todo remove on 3.0 release
   */
  register(name: string, url: string) {
    this.icons.push({name, url});
  }

  /**
   * Register icons set.
   *
   * @deprecated Use `.add()`
   *
   * @todo remove on 3.0 release
   */
  registerSet(icons: KitIcon[]) {
    this.icons = [...this.icons, ...icons];
  }

  /**
   * Get icon by name.
   *
   * @internal
   */
  get(name: string): Observable<KitIconNode> {
    const icon = this.icons.find(i => i.name === name);
    if (icon) {
      // check cache
      const cached = this.cache.find(c => c.name === name);
      if (cached) {
        return of({svg: this.cloneSvg(cached.svg), size: icon.size});
      } else {
        return this.http.get(icon.url, {responseType: 'text'})
          .pipe(
            map(this.svgElementFromString),
            tap(svg => this.cache.push({name, svg: svg})),
            map(svg => ({svg: this.cloneSvg(svg), size: icon.size})),
          );
      }
    } else {
      throw new Error(`Icon "${name}" not found!`);
    }
  }

  private cloneSvg(svg: SVGElement): SVGElement {
    return svg.cloneNode(true) as SVGElement;
  }

  /**
   * Creates a DOM element from the given SVG string.
   */
  private svgElementFromString(str: string): SVGElement {
    // @todo impl multi-platform
    const div = document.createElement('div');
    div.innerHTML = str;
    const svg = div.querySelector('svg') as SVGElement;
    return svg;
  }
}
