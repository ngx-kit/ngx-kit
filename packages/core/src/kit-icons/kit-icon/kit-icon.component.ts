import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, } from '@angular/core';
import { KitPlatformService } from '../../kit-platform/kit-platform.service';
import { KitIconsRegistryService } from '../kit-icons-registry.service';

@Component({
  selector: 'kit-icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitIconComponent implements OnInit, OnChanges {
  /**
   * Svg fill color.
   */
  @Input() color = 'currentcolor';

  /**
   * Name in the registry.
   */
  @Input() name: string;

  /**
   * Size in pixels or percents.
   */
  @Input() size = '100%';

  private setSvg = (svg: SVGElement) => {
    const el = this.el.nativeElement;
    el.innerHTML = '';
    this.renderer.setStyle(svg, 'height', this.size);
    this.renderer.setStyle(svg, 'width', this.size);
    this.renderer.setStyle(svg, 'fill', this.color);
    this.renderer.appendChild(el, svg);
  };

  constructor(private registry: KitIconsRegistryService,
              private el: ElementRef,
              private renderer: Renderer2,
              private platform: KitPlatformService) {
  }

  ngOnChanges() {
    if (this.platform.isBrowser()) {
      this.registry.get(this.name).subscribe(this.setSvg);
    }
  }

  ngOnInit() {
  }
}
