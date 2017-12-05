import { Directive, ElementRef, HostBinding, Input, OnInit, } from '@angular/core';
import { KitKeymapService } from './kit-keymap.service';

/**
 * Registration directive.
 *
 * Injects KitKeymapService and self-registrates.
 *
 * Using for pick html-element and listen keyboard events on it.
 *
 * Makes any element focusable.
 */
@Directive({
  selector: '[kitKeymap]',
})
export class KitKeymapDirective implements OnInit {
  @Input() kitKeymap: void;

  @HostBinding('tabindex') tabindex = 0;

  constructor(private service: KitKeymapService,
              private el: ElementRef) {
  }

  get nativeEl(): Element {
    return this.el.nativeElement;
  }

  ngOnInit() {
    this.service.register(this);
  }
}
