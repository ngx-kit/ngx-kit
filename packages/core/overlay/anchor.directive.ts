import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor'
})
export class KitAnchorDirective implements OnInit {

  @Input() kitAnchor: any;

  @Output() hostClick = new EventEmitter<MouseEvent>();

  @HostListener('click') click(event: MouseEvent) {
    this.hostClick.emit(event);
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  get nativeEl() {
    return this.elementRef.nativeElement;
  }

}
