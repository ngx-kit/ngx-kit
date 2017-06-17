import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor'
})
export class KitAnchorDirective implements OnInit {

  @Input() kitAnchor: any;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  get nativeEl() {
    return this.elementRef.nativeElement;
  }

}
