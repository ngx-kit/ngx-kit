import { ChangeDetectionStrategy, Component, DoCheck, ViewContainerRef, } from '@angular/core';
import { KitOverlayService } from './kit-overlay.service';

@Component({
  selector: 'kit-overlay-host',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitOverlayHostComponent implements DoCheck {
  constructor(public vcr: ViewContainerRef,
              private service: KitOverlayService) {
    this.service.registerHost(this);
  }

  ngDoCheck() {
    this.service.hostDoCheckEmit();
  }
}
