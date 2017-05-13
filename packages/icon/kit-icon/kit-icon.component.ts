import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { style as s } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitIconService } from '../kit-icon.service';
import { KitIconRegistryService } from '../kit-icon-registry.service';

@Component({
  selector: 'kit-icon',
  template: `
      <ng-content></ng-content>
  `,
})
export class KitIconComponent implements OnInit, OnChanges {

  @Input() color: string;
  @Input() name: string;
  @Input() size = 24;

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitIconService,
              private registry: KitIconRegistryService,
              private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = s(
        theme.host.base,
    );
  }

  ngOnChanges() {
    this.registry.get(this.name).subscribe(this.setSvg);
  }

  private compileStyles() {
  }

  private setSvg = (svg: SVGElement) => {
    const el = this.el.nativeElement;
    el.innerHTML = '';
    svg.classList.add(this.getIconClass());
    this.renderer.appendChild(el, svg);
  };

  private getIconClass() {
    return s({
      height: this.size,
      width: this.size,
      fill: this.color,
    });
  }

}
