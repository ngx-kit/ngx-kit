import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Optional, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[uiDropdownToggle]',
  exportAs: 'toggle',
  providers: [
    {
      provide: 'meh',
      useValue: 'yay',
    },
  ],
})
export class UiDropdownToggleDirective {
  @Input() uiDropdownToggle: TemplateRef<any>;

  @Input() closeOnItemClick = true;

  @Input() position: ConnectedPosition = {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
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

  @HostListener('click') clickHandler() {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  show() {
    if (this.open) {
      return;
    }
    if (!this.uiDropdownToggle) {
      console.warn(`UiDropdownToggleDirective: templateRef not passed to [uiDropdownToggle].`);
    }
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([this.position]),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    const portal = new TemplatePortal(this.uiDropdownToggle, this.vcr);
    this.overlayRef.attach(portal);
    // Handle closing
    merge(
      this.getOutsideClickStream(),
      this.overlayRef.detachments(),
    ).subscribe(() => {
      this.close();
    });
    setTimeout(() => {
      this._open.next(true);
    }, 0);
  }

  close() {
    if (this.open && this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = undefined;
      this._open.next(false);
    }
  }

  private getOutsideClickStream(): Observable<any> {
    return merge(
      fromEvent(this.document, 'click') as Observable<MouseEvent>,
      fromEvent(this.document, 'touchend') as Observable<TouchEvent>,
    )
      .pipe(filter(event => {
        const clickTarget = event.target as HTMLElement;
        return this.open &&
          clickTarget !== this.elementRef.nativeElement &&
          (!!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget));
      }));
  }
}
