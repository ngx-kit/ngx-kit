import { Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, } from '@angular/core';
import { KitAriaGridService } from './kit-aria-grid.service';

@Directive({
  selector: '[kitAriaGridCell]',
})
export class KitAriaGridCellDirective implements OnInit, OnChanges, OnDestroy {
  @Input() kitAriaGridCell: [number, number];

  @HostBinding('tabindex') tabindex = -1;

  constructor(private service: KitAriaGridService,
              private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnDestroy() {
    this.service.remove(this.kitAriaGridCell);
  }

  ngOnInit() {
    const focus = this.service.register(this.kitAriaGridCell, this);
    if (focus) {
      this.focus();
    }
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
