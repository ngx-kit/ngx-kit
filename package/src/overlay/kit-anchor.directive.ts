import {
  ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor',
})
export class KitAnchorDirective implements OnInit {
  @Output() hostClick = new EventEmitter<MouseEvent>();

  @Input() kitAnchor: any;

  constructor(private elementRef: ElementRef,
              private cdr: ChangeDetectorRef) {
  }

  get nativeEl() {
    return this.elementRef.nativeElement;
  }

  ngOnInit() {
  }

  @HostListener('click')
  click(event: MouseEvent) {
    this.hostClick.emit(event);
  }
}
