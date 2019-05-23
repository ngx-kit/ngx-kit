import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable()
export class KitModalRef {
  constructor(
    private overlayRef: OverlayRef,
  ) {
  }

  close() {
    this.overlayRef.detach();
  }

  detachments() {
    return this.overlayRef.detachments();
  }
}
