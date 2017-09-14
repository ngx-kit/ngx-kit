import { Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewRef, } from '@angular/core';
import { KitOverlayService } from './kit-overlay.service';

@Directive({
  selector: '[kitOverlay]',
})
export class KitOverlayDirective implements OnInit, OnChanges, OnDestroy {
  @Input() kitOverlay: boolean;

  private viewRef: ViewRef | null;

  constructor(private templateRef: TemplateRef<any>,
              private service: KitOverlayService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitOverlay']) {
      this.toggleHost();
    }
  }

  ngOnDestroy() {
    this.destroyView();
  }

  ngOnInit() {
  }

  private destroyView() {
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private toggleHost() {
    if (this.kitOverlay && !this.viewRef) {
      this.viewRef = this.service.hostTemplate(this.templateRef, {});
      this.viewRef.detectChanges();
    } else {
      this.destroyView();
    }
  }
}
