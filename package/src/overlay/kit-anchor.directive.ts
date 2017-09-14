import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor',
})
export class KitAnchorDirective implements OnInit {
  @Output() hostClick = new EventEmitter<MouseEvent>();

  @Input() kitAnchor: any;

  private _opened: boolean;

  constructor(private elementRef: ElementRef,
              private cdr: ChangeDetectorRef,
              private renderer: Renderer2) {
  }

  get nativeEl() {
    return this.elementRef.nativeElement;
  }

  get opened() {
    return this._opened;
  }

  set opened(opened: boolean) {
    this._opened = opened;
    this.cdr.detectChanges();
  }

  ngOnInit() {
  }

  @HostListener('click')
  click(event: MouseEvent) {
    this.hostClick.emit(event);
  }

  toggle() {
    this._opened = !this._opened;
  }
}
