import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2, } from '@angular/core';

@Directive({
  selector: '[kitColorPickerSlider]',
})
export class KitColorPickerSliderDirective implements OnDestroy {
  @Input() kitColorPickerSlider: any;

  @Output() mouseUp = new EventEmitter<any>();

  @Output('newValue') newValue = new EventEmitter<any>();

  @Input('rgX') rgX: number;

  @Input('rgY') rgY: number;

  @Input('slider') slider: string;

  private listeners: Function[] = [];

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnDestroy() {
    this.destroyListeners();
  }

  getX(event: any): number {
    return (event.pageX !== undefined ? event.pageX : event.touches[0].pageX)
        - this.el.nativeElement.getBoundingClientRect().left
        - window.pageXOffset;
  }

  getY(event: any): number {
    return (event.pageY !== undefined ? event.pageY : event.touches[0].pageY)
        - this.el.nativeElement.getBoundingClientRect().top
        - window.pageYOffset;
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event: any) {
    this.start(event);
  }

  move(event: any) {
    event.preventDefault();
    this.setCursor(event);
  }

  setCursor(event: any) {
    const height = this.el.nativeElement.offsetHeight;
    const width = this.el.nativeElement.offsetWidth;
    const x = Math.max(0, Math.min(this.getX(event), width));
    const y = Math.max(0, Math.min(this.getY(event), height));
    if (this.rgX !== undefined && this.rgY !== undefined) {
      this.newValue.emit({s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY});
    } else if (this.rgX === undefined && this.rgY !== undefined) { // ready to use vertical sliders
      this.newValue.emit({v: y / height, rg: this.rgY});
    } else {
      this.newValue.emit({v: x / width, rg: this.rgX});
    }
  }

  start(event: any) {
    this.setCursor(event);
    this.listeners.push(this.renderer.listen('document', 'mousemove', this.move.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'touchmove', this.move.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'mouseup', this.destroyListeners.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'touchend', this.destroyListeners.bind(this)));
  }

  @HostListener('touchstart')
  touchstart($event: TouchEvent) {
    this.start($event);
  }

  private destroyListeners() {
    this.listeners.forEach(l => l());
    this.mouseUp.emit();
  }
}
