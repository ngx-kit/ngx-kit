import { ChangeDetectionStrategy, Component, Input, ViewContainerRef, } from '@angular/core';
import { KitOverlayService } from './kit-overlay.service';

@Component({
  selector: 'kit-overlay-host,[kitOverlayHost]',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitOverlayHostComponent {
  @Input() kitOverlayHost: void;

  constructor(public vcr: ViewContainerRef,
              private service: KitOverlayService) {
    this.service.registerHost(this);
  }
}
