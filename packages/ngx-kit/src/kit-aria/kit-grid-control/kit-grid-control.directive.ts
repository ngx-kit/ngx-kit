import { Directive, ElementRef, HostBinding, Input, } from '@angular/core';
import { KitGridControlService } from './kit-grid-control.service';

@Directive({
  selector: '[kitGridControl]',
})
export class KitGridControlDirective {
  @Input() kitGridControl: void;

  @HostBinding('tabindex') tabindex = 0;

  constructor(private service: KitGridControlService,
              private el: ElementRef) {
    this.service.registerGrid(this);
  }

  get nativeEl(): Element {
    return this.el.nativeElement;
  }
}
