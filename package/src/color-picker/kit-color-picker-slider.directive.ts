import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[kitColorPickerSlider]',
})
export class KitColorPickerSliderDirective {
  @Input() kitColorPickerSlider: any;

  @Output('newValue') newValue = new EventEmitter<any>();

  @Input('rgX') rgX: number;

  @Input('rgY') rgY: number;

  @Input('slider') slider: string;

  private listenerMove = (event: any) => {
    this.move(event);
  };

  private listenerStop = () => {
    this.stop();
  };

  constructor(private el: ElementRef) {
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
    document.addEventListener('mousemove', this.listenerMove);
    document.addEventListener('touchmove', this.listenerMove);
    document.addEventListener('mouseup', this.listenerStop);
    document.addEventListener('touchend', this.listenerStop);
  }

  stop() {
    document.removeEventListener('mousemove', this.listenerMove);
    document.removeEventListener('touchmove', this.listenerMove);
    document.removeEventListener('mouseup', this.listenerStop);
    document.removeEventListener('touchend', this.listenerStop);
  }

  @HostListener('touchstart')
  touchstart($event: TouchEvent) {
    this.start($event);
  }
}
