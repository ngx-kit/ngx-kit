import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, Type } from '@angular/core';
import { filter } from 'rxjs/operators';
import { KitModalRef } from './kit-modal-ref';

/**
 * Modal dialogs are displayed in a layer is above of the page content.
 */
@Injectable({
  providedIn: 'root',
})
export class KitModalService {
  constructor(
    private cdkOverlay: Overlay,
  ) {
  }

  show<T>(args: {
    component: Type<T>,
  }) {
    const overlayRef = this.cdkOverlay.create({
      hasBackdrop: true,
      scrollStrategy: this.cdkOverlay.scrollStrategies.block(),
      positionStrategy: this.cdkOverlay.position().global().top('4em').centerHorizontally(),
    });
    const modalRef = new KitModalRef(overlayRef);
    // Handle backdrop click
    overlayRef.backdropClick()
      .subscribe(() => overlayRef.detach());
    // Handle escape keydown
    overlayRef.keydownEvents()
      .pipe(filter(event => event.key === 'Escape' || event.key === 'Esc'))
      .subscribe(() => overlayRef.detach());
    // Create injector & show modal
    const injector = Injector.create({
      providers: [
        {
          provide: OverlayRef,
          useValue: overlayRef,
        },
        {
          provide: KitModalRef,
          useValue: modalRef,
        },
      ],
    });
    const portal = new ComponentPortal(args.component, null, injector);
    overlayRef.attach(portal);
    return modalRef;
  }
}
