import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

import { KitIconsRegistryService } from '../kit-icons-registry.service';

@Component({
  selector: 'kit-icon,[kit-icon],[kitIcon]',
  template: `
      <ng-content></ng-content>
  `,
})
export class KitIconComponent implements OnInit, OnChanges {

  @Input() kitIcon: any;

  @Input() color: string;
  @Input() name: string;
  @Input() size = 24;

  @HostBinding('class') hostClass: string;

  constructor(private registry: KitIconsRegistryService,
              private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.registry.get(this.name).subscribe(this.setSvg);
  }

  private setSvg = (svg: SVGElement) => {
    const el = this.el.nativeElement;
    el.innerHTML = '';
//    svg.classList.add(this.getIconClass());
    this.renderer.appendChild(el, svg);
  };

  private getIconClass() {
//    return s({
//      height: this.size,
//      width: this.size,
//      fill: this.color,
//    });
  }

}
