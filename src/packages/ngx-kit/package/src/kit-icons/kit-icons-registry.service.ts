import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { KitIcon, KitIconCached } from './meta';

/**
 *
 * ## Usage
 *
 * ### Register icons
 *
 * ```typescript
 * this.iconsRegistry.register('star', '/assets/icons/star.svg');
 * // or
 * this.iconsRegistry.registerSet([
 * {name: 'star', url: '/assets/icons/star.svg'},
 * {name: 'cloud', url: '/assets/icons/cloud.svg'},
 * ]);
 * ```
 *
 * ### Use in a template
 *
 * ```html
 * <kit-icon [name]="'star'"></kit-icon>
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

  cloneSvg(svg: SVGElement): SVGElement {
    return svg.cloneNode(true) as SVGElement;
  }

  /**
   * Get icon by name.
   *
   * @publicApi
   */
  get(name: string): Observable<SVGElement> {
    const icon = this.icons.find(i => i.name === name);
    if (icon) {
      // check cache
      const cached = this.cache.find(c => c.name === name);
      if (cached) {
        return Observable.of(this.cloneSvg(cached.svg));
      } else {
        return this.http.get(icon.url, {responseType: 'text'})
            .map(this.svgElementFromString)
            .do(svg => this.cache.push({name, svg: svg}))
            .map(this.cloneSvg)
      }
    } else {
      throw new Error(`Icon "${name}" not found!`);
    }
  }

  /**
   * Register icon.
   *
   * @publicApi
   */
  register(name: string, url: string) {
    this.icons.push({name, url});
  }

  /**
   * Register icons set.
   *
   * @publicApi
   */
  registerSet(icons: KitIcon[]) {
    this.icons = [...this.icons, ...icons];
  }

  /**
   * Creates a DOM element from the given SVG string.
   */
  private svgElementFromString(str: string): SVGElement {
    const div = document.createElement('div');
    div.innerHTML = str;
    const svg = div.querySelector('svg') as SVGElement;
    return svg;
  }
}
