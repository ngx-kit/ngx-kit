import { ChangeDetectionStrategy, Component, ViewContainerRef, } from '@angular/core';

@Component({
  selector: 'kit-overlay-host-wrapper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitOverlayHostWrapperComponent {
  constructor(
    public vcr: ViewContainerRef,
  ) {
  }
}
