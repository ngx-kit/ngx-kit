import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { KitPlatformService } from '../../kit-platform/kit-platform.service';
import { isArray } from '../../util/is-array';
import { KitIconsRegistryService } from '../kit-icons-registry.service';
import { KitIconNode } from '../meta';

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
   * Size. If not specified icon size depends on line-height.
   * Height and width can be specified separately by passing array `[height, width]`.
   * Accepts any css sizing ('32px', '100%', '2em').
   */
  @Input() size: string | [string, string];

  private svgChangesSubscription: Subscription;

  private node: KitIconNode;

  constructor(
    private registry: KitIconsRegistryService,
    private el: ElementRef,
    private renderer: Renderer2,
    private platform: KitPlatformService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.platform.isBrowser()) {
      if ('name' in changes) {
        const svgChanges = this.registry.get(this.name);
        if (svgChanges) {
          if (this.svgChangesSubscription) {
            this.svgChangesSubscription.unsubscribe();
          }
          this.svgChangesSubscription = svgChanges.subscribe(node => {
            this.node = node;
            this.el.nativeElement.innerHTML = '';
            this.updateStyles();
            this.renderer.appendChild(this.el.nativeElement, this.node.svg);
          });
        }
      }
      if ('size' in changes || 'color' in changes) {
        this.updateStyles();
      }
    }
  }

  ngOnInit() {
  }

  private updateStyles() {
    let height: string;
    let width: string;
    let position: string;
    let top: string;
    const size = this.size || this.node.size;
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
    this.renderer.setStyle(this.node.svg, 'fill', this.color);
    this.renderer.setStyle(this.node.svg, 'height', height);
    this.renderer.setStyle(this.node.svg, 'position', position);
    this.renderer.setStyle(this.node.svg, 'top', top);
    this.renderer.setStyle(this.node.svg, 'width', width);
  }
}
