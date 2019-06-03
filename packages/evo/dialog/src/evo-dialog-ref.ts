import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable()
export class EvoDialogRef {
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
