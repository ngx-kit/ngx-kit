import { Directive, Input, OnChanges } from '@angular/core';
import { KitStyleService } from '../../kit-style/kit-style.service';
import { KitOverlayPositionDirectiveParams } from '../meta';
import { KitOverlayPositionService } from './kit-overlay-position.service';

/**
 * @deprecated Use KitPositionModule instead.
 * @todo remove in the next major release.
 */
@Directive({
  selector: '[kitOverlayPosition]',
  providers: [
    KitOverlayPositionService,
    KitStyleService,
  ],
})
export class KitOverlayPositionDirective implements OnChanges {
  @Input() kitOverlayPosition: Partial<KitOverlayPositionDirectiveParams>;

  constructor(private service: KitOverlayPositionService) {
  }

  ngOnChanges() {
    this.service.applyParams(this.kitOverlayPosition);
    this.service.reposition();
  }
}
