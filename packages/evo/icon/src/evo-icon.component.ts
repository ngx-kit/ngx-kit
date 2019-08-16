import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { Intersection, evoUuid } from '@ngx-kit/evo/util';
import { from, Subject } from 'rxjs';
import { filter, mapTo, switchMap, take, takeUntil } from 'rxjs/operators';
import { EvoIconsRegistry } from './evo-icons-registry';
import { EvoIconSource } from './meta';

/**
 * Component for rendering svg icon.
 */
@Component({
  selector: 'evo-icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-self: center;
    }
  `],
  providers: [
    Intersection,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconComponent implements OnChanges, OnDestroy {
  /**
   * Svg fill color.
   */
  @Input() color = 'currentcolor';

  /**
   * Name in the registry.
   */
  @Input() name?: string;

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

  /**
   * Load and render icon only when visible.
   */
  @Input() intersectionLoad = false;

  /**
   * Pass svg xml directly.
   */
  @Input() xml?: string;

  private source: EvoIconSource;

  private svg: SVGElement;

  private nameChanges = new Subject<string>();

  private destroy = new Subject<void>();

  private titleEl: any;

  private descEl: any;

  constructor(
    private registry: EvoIconsRegistry,
    private el: ElementRef,
    private renderer: Renderer2,
    private platform: Platform,
    private intersection: Intersection,
  ) {
    // Handle icon displayed by name
    this.nameChanges
      .pipe(
        takeUntil(this.destroy),
        filter(name => !!name),
        switchMap(name => {
          // Debounce icon load until being visible (if needed).
          return this.intersectionLoad
            ? this.intersection.observe().pipe(
              filter(Boolean),
              take(1),
              mapTo(name),
            )
            : from([name]);
        }),
        switchMap(name => this.registry.get(name)),
      )
      .subscribe((source: EvoIconSource) => {
        this.source = source;
        this.render();
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
    if ('xml' in changes && this.xml) {
      // @todo validate conflicts with name
      this.source = {svg: this.xml};
      this.render();
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private render() {
    if (this.source.svg) {
      this.svg = this.svgElementFromString(this.source.svg);
      this.clear();
      this.updateStyles();
      this.updateA11y();
      this.mount();
    }
  }

  private clear() {
    if (this.platform.isBrowser) {
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
        if (Array.isArray(size)) {
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
      this.renderer.setStyle(this.svg, 'fill', `var(--evo-icon--svg-color, ${this.color})`);
      this.renderer.setStyle(this.svg, 'height', `var(--evo-icon--svg-height, ${height})`);
      this.renderer.setStyle(this.svg, 'position', `var(--evo-icon--svg-position, ${position})`);
      this.renderer.setStyle(this.svg, 'top', `var(--evo-icon--svg-top, ${top})`);
      this.renderer.setStyle(this.svg, 'width', `var(--evo-icon--svg-width, ${width})`);
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
          const titleId = evoUuid();
          this.renderer.setAttribute(this.titleEl, 'id', titleId);
          this.renderer.insertBefore(this.svg, this.titleEl, this.svg.childNodes[0]);
        }
        this.titleEl.innerHTML = this.title;
      }
      if (this.desc) {
        if (!this.descEl) {
          this.descEl = this.renderer.createElement('desc');
          const descId = evoUuid();
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
