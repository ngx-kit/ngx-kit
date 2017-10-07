import { Directive, ElementRef, Input, } from '@angular/core';

@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor',
})
export class KitAnchorDirective {
  @Input() kitAnchor: any;

  constructor(private elementRef: ElementRef) {
  }

  get nativeEl() {
    return this.elementRef.nativeElement;
  }
}
