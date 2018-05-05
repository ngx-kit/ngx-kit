import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { KitPlatformService } from '../../kit-platform/kit-platform.service';
import { isArray } from '../../util/is-array';
import { uuid } from '../../util/uuid';
import { KitIconsRegistryService } from '../kit-icons-registry.service';
import { KitIconSource } from '../meta';

@Component({
  selector: 'kit-icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-self: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitIconComponent implements OnChanges, OnDestroy {
  /**
   * Svg fill color.
   */
  @Input() color = 'currentcolor';

  /**
   * Name in the registry.
   */
  @Input() name: string;

  /**
   * Size. If not specified icon size depends on line-height.
   * Height and width can be specified separately by passing array `[height, width]`.
   * Accepts any css sizing ('32px', '100%', '2em').
   */
  @Input() size: string | [string, string];

  /**
   * A11y title.
   */
  @Input() title: string;

  /**
   * A11y description.
   */
  @Input() desc: string;

  private source: KitIconSource;

  private svg: SVGElement;

  private nameChanges = new Subject<string>();

  private destroy = new Subject<void>();

  private titleEl: any;

  private descEl: any;

  constructor(
    private registry: KitIconsRegistryService,
    private el: ElementRef,
    private renderer: Renderer2,
    private platform: KitPlatformService,
  ) {
    this
      .nameChanges
      .pipe(
        takeUntil(this.destroy),
        switchMap(name => this.registry.get(name)),
      )
      .subscribe((source: KitIconSource) => {
        this.source = source;
        this.svg = this.svgElementFromString(this.source.svg);
        this.clear();
        this.updateStyles();
        this.updateA11y();
        this.mount();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('name' in changes) {
      this.nameChanges.next(this.name);
    }
    if ('size' in changes || 'color' in changes) {
      this.updateStyles();
    }
    if ('title' in changes || 'desc' in changes) {
      this.updateA11y();
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private clear() {
    if (this.platform.isBrowser()) {
      const el: HTMLElement = this.el.nativeElement;
      while (el.hasChildNodes() && el.lastChild) {
        el.removeChild(el.lastChild);
      }
    }
    this.titleEl = null;
    this.descEl = null;
  }

  private updateStyles() {
    if (this.source && this.svg) {
      let height: string;
      let width: string;
      let position: string;
      let top: string;
      const size = this.size || this.source.size;
      if (size) {
        if (isArray(size)) {
          height = size[0];
          width = size[1];
        } else {
          height = size;
          width = size;
        }
      } else {
        height = '1em';
        width = '1em';
      }
      // Fix position if height is 1em (default inline sizing)
      if (height === '1em') {
        position = 'relative';
        top = '.125em';
      } else {
        position = 'static';
        top = 'auto';
      }
      // Set props
      this.renderer.setStyle(this.svg, 'fill', this.color);
      this.renderer.setStyle(this.svg, 'height', height);
      this.renderer.setStyle(this.svg, 'position', position);
      this.renderer.setStyle(this.svg, 'top', top);
      this.renderer.setStyle(this.svg, 'width', width);
    }
  }

  /**
   * Creates a DOM element from the given SVG string.
   */
  private svgElementFromString(str: string): SVGElement {
    const div = this.renderer.createElement('div');
    div.innerHTML = str;
    const svg = div.querySelector('svg') as SVGElement;
    if (svg) {
      return svg;
    } else {
      throw new Error(`SVG has not been rendered from "${str}"`);
    }
  }

  private updateA11y() {
    if (this.source && this.svg) {
      this.renderer.setAttribute(this.svg, 'role', 'img');
      if (this.title) {
        if (!this.titleEl) {
          this.titleEl = this.renderer.createElement('title');
          const titleId = uuid();
          this.renderer.setAttribute(this.titleEl, 'id', titleId);
          this.renderer.insertBefore(this.svg, this.titleEl, this.svg.childNodes[0]);
        }
        this.titleEl.innerHTML = this.title;
      }
      if (this.desc) {
        if (!this.descEl) {
          this.descEl = this.renderer.createElement('desc');
          const descId = uuid();
          this.renderer.setAttribute(this.descEl, 'id', descId);
          this.renderer.appendChild(this.svg, this.descEl);
        }
        this.descEl.innerHTML = this.desc;
      }
      this.renderer.setAttribute(
        this.svg,
        'aria-labelledby',
        `${this.titleEl ? this.titleEl.id : ''} ${this.descEl ? this.descEl.id : ''}`,
      );
    }
  }

  private mount() {
    this.renderer.appendChild(this.el.nativeElement, this.svg);
  }
}
