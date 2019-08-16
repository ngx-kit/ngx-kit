import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, Type } from '@angular/core';
import { filter } from 'rxjs/operators';
import { EvoDialogRef } from './evo-dialog-ref';

/**
 * Modal dialogs are displayed in a layer is above of the page content.
 */
@Injectable({
  providedIn: 'root',
})
export class EvoDialog {
  constructor(
    private cdkOverlay: Overlay,
  ) {
  }

  show<T>(args: {
    component: Type<T>;
    dialogComponent: Type<any>,
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
    overlayConfig?: OverlayConfig;
  }) {
    const overlayRef = this.cdkOverlay.create({
      hasBackdrop: true,
      scrollStrategy: this.cdkOverlay.scrollStrategies.block(),
      positionStrategy: this.cdkOverlay.position().global().centerHorizontally().top('5vh'),
      ...args.overlayConfig,
    });
    const modalRef = new EvoDialogRef(overlayRef, args.component);
    // Handle backdrop click
    overlayRef.backdropClick()
      .subscribe(() => {
        if (args.closeOnBackdrop) {
          overlayRef.detach();
        }
      });
    // Handle escape keydown
    overlayRef.keydownEvents()
      .pipe(filter(event => event.key === 'Escape' || event.key === 'Esc'))
      .subscribe(() => {
        if (args.closeOnEsc) {
          overlayRef.detach();
        }
      });
    // Create injector & show modal
    const injector = Injector.create({
      providers: [
        {
          provide: OverlayRef,
          useValue: overlayRef,
        },
        {
          provide: EvoDialogRef,
          useValue: modalRef,
        },
      ],
    });
    const portal = new ComponentPortal(args.dialogComponent, null, injector);
    overlayRef.attach(portal);
    return modalRef;
  }
}
