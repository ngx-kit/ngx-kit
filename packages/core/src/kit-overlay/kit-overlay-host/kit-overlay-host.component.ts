import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'kit-overlay-host',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitOverlayHostComponent {
  constructor(
    public zone: NgZone,
    public vcr: ViewContainerRef,
    public cdr: ChangeDetectorRef,
    public elRef: ElementRef,
  ) {
  }
}
