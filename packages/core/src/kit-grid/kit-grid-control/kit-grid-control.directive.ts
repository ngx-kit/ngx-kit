import { Directive, ElementRef, HostBinding, Input, OnInit, } from '@angular/core';
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
export class KitGridControlDirective implements OnInit {
  @Input() kitGridControl: void;

  @HostBinding('tabindex') tabindex = 0;

  constructor(private service: KitGridControlService,
              private el: ElementRef) {
  }

  get nativeEl(): Element {
    return this.el.nativeElement;
  }

  ngOnInit() {
    this.service.registerGrid(this);
  }
}
