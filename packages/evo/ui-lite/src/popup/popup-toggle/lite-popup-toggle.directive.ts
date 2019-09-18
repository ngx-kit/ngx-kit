import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Optional, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';

@Directive({
  selector: '[litePopupToggle]',
  exportAs: 'toggle',
})
export class LitePopupToggleDirective {
  @Input() litePopupToggle: TemplateRef<any>;

  @Input() closeOnItemClick = true;

  @Input() position: ConnectedPosition = {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  };

  private _open = new BehaviorSubject<boolean>(false);

  private overlayRef?: OverlayRef;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private vcr: ViewContainerRef,
    @Optional() @Inject(DOCUMENT) private document: any,
  ) {
  }

  get open() {
    return this._open.value;
  }

  @Output() get openChanges() {
    return this._open.asObservable();
  }

//  @HostListener('click') clickHandler() {
//    if (this.open) {
//      this.close();
//    } else {
//      this.show();
//    }
//  }

  @HostListener('mouseenter')
  mouseenterHandler() {
    this.show();
  }

  @HostListener('mouseleave')
  mouseleaveHandler() {
    this.close();
  }

  show() {
    if (this.open) {
      return;
    }
    if (!this.litePopupToggle) {
      console.warn(`LitePopupToggleDirective: templateRef not passed to [litePopupToggle].`);
    }
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([this.position]),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    const portal = new TemplatePortal(this.litePopupToggle, this.vcr);
    this.overlayRef.attach(portal);
    setTimeout(() => {
      this._open.next(true);
    }, 0);
  }

  close() {
    setTimeout(() => {
      if (this.open && this.overlayRef) {
        this.overlayRef.detach();
        this.overlayRef = undefined;
        this._open.next(false);
      }
    }, 0);
  }
}
