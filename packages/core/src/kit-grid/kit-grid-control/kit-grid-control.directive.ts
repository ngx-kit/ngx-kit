import { Directive, ElementRef, HostBinding, Input, } from '@angular/core';
import { KitGridControlService } from './kit-grid-control.service';

/**
 * Registration directive.
 *
 * Inject KitGridControlService and self-register.
 *
 * Using for pick html-element and listen keyboard events on it.
 *
 * Makes any element focusable.
 */
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
