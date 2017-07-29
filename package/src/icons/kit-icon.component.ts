import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { KitIconsRegistryService } from './kit-icons-registry.service';

@Component({
  selector: 'kit-icon,[kitIcon]',
  template: `
    <ng-content></ng-content>
  `,
})
export class KitIconComponent implements OnInit, OnChanges {
  @Input() color: string;

  @HostBinding('class') hostClass: string;

  @Input() kitIcon: any;

  @Input() name: string;

  @Input() size = 24;

  private setSvg = (svg: SVGElement) => {
    const el = this.el.nativeElement;
    el.innerHTML = '';
//    svg.classList.add(this.getIconClass());
    this.renderer.appendChild(el, svg);
  };

  constructor(private registry: KitIconsRegistryService,
              private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnChanges() {
    this.registry.get(this.name).subscribe(this.setSvg);
  }

  ngOnInit() {
  }

  private getIconClass() {
//    return s({
//      height: this.size,
//      width: this.size,
//      fill: this.color,
//    });
  }
}
