import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { KitAriaGridService } from './kit-aria-grid.service';

@Directive({
  selector: '[kitAriaGrid]',
})
export class KitAriaGridDirective implements OnChanges {
  @Input() kitAriaGrid: void;

  @HostBinding('tabindex') tabindex = 0;

  constructor(private service: KitAriaGridService,
              private el: ElementRef) {
    this.service.registerGrid(this);
  }

  get nativeEl(): Element {
    return this.el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitAriaGrid']) {
    }
  }

  @HostListener('focus')
  focusHandler() {
    this.service.focus();
  }
}
