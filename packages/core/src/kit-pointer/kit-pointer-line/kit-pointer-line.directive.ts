import { Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2, } from '@angular/core';
import { KitPointerLineMoveEvent } from '../meta';

@Directive({
  selector: '[kitPointerLine]',
})
export class KitPointerLineDirective {
  @Input() kitPointerLine: void;

  @Output() move = new EventEmitter<KitPointerLineMoveEvent>();

  @Output() start = new EventEmitter<void>();

  @Output() stop = new EventEmitter<void>();

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private zone: NgZone) {
  }

  @HostListener('click', ['$event'])
  clickHandler(event: MouseEvent) {
    this.move.emit({
      position: this.calcPosition(event, this.el.nativeElement),
      lineWidth: this.el.nativeElement.clientWidth,
    });
  }

  @HostListener('mousedown', ['$event'])
  mousedownHandler(event: MouseEvent) {
    this.start.emit();
    this.handleMoving();
  }

  private calcPosition(event: MouseEvent, el: Element) {
    const width = el.clientWidth;
    const mousePos = event.clientX;
    const sliderRect: ClientRect = el.getBoundingClientRect();
    return mousePos <= sliderRect.left
        ? 0
        : mousePos >= sliderRect.right
            ? width
            : mousePos - sliderRect.left;
  }

  private handleMoving() {
    this.zone.runOutsideAngular(() => {
      const subs: any[] = [];
      subs.push(this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
        // prevent selection
        event.preventDefault();
        // calc & output
        this.zone.run(() => {
          this.move.emit({
            position: this.calcPosition(event, this.el.nativeElement),
            lineWidth: this.el.nativeElement.clientWidth,
          });
        });
      }));
      subs.push(this.renderer.listen('window', 'mouseup', (event: MouseEvent) => {
        // prevent side effects
        event.preventDefault();
        // unsub from events
        subs.forEach(s => s());
        // output
        this.zone.run(() => {
          this.stop.emit();
        });
      }));
    })
  }
}
