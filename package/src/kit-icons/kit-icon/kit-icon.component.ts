import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { StylerComponent, StylerModule, StylerService } from '@ngx-kit/styler';
import { KitIconsRegistryService } from '../kit-icons-registry.service';
import { KitIconStyle } from './kit-icon.style';

@Component({
  selector: 'kit-icon',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerModule.forComponent(KitIconStyle),
  ],
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
    svg.classList.add(this.getIconClass());
    this.renderer.appendChild(el, svg);
  };

  constructor(private registry: KitIconsRegistryService,
              private el: ElementRef,
              private renderer: Renderer2,
              private styler: StylerComponent,
              private stylerService: StylerService,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      this.registry.get(this.name).subscribe(this.setSvg);
    }
  }

  ngOnInit() {
  }

  private getIconClass() {
    return this.stylerService.style({
      height: this.size,
      width: this.size,
      fill: this.color,
    });
  }
}
