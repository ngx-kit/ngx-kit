import { Directive, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { KitStyleService } from '../../kit-style/kit-style.service';
import { KitOverlayPositionDirectiveParams } from '../meta';
import { KitOverlayPositionService } from './kit-overlay-position.service';

@Directive({
  selector: '[kitOverlayPosition]',
  providers: [
    KitOverlayPositionService,
    KitStyleService,
  ],
})
export class KitOverlayPositionDirective implements OnChanges, OnInit {
  @Input() kitOverlayPosition: Partial<KitOverlayPositionDirectiveParams>;

  @Output() outsideClick = new EventEmitter<MouseEvent>();

  constructor(private service: KitOverlayPositionService) {
  }

  ngOnChanges() {
    this.service.applyParams(this.kitOverlayPosition);
    this.service.reposition();
  }

  ngOnInit() {
    this.service.outsideClicks.subscribe((event) => {
      this.outsideClick.emit(event);
    });
  }
}
