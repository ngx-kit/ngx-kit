import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable, Type } from '@angular/core';

@Injectable()
export class DialogRef {
  constructor(
    private overlayRef: OverlayRef,
    public readonly component: Type<any>,
  ) {
  }

  close() {
    this.overlayRef.detach();
  }

  detachments() {
    return this.overlayRef.detachments();
  }
}
