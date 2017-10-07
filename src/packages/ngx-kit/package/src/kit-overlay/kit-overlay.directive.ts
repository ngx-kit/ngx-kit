import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewRef,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { KitOverlayService } from './kit-overlay.service';

@Directive({
  selector: '[kitOverlay]',
})
export class KitOverlayDirective implements OnChanges, OnDestroy {
  @Input() kitOverlay: boolean;

  private doCheckSub: Subscription;

  private viewRef: ViewRef | null;

  constructor(private templateRef: TemplateRef<any>,
              private service: KitOverlayService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitOverlay']) {
      this.toggleHost();
    }
  }

  ngOnDestroy() {
    this.destroyView();
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
      this.doCheckSub = this.service.hostDoCheck$.subscribe(() => {
        this.cdr.markForCheck();
      })
    } else {
      this.destroyView();
      if (this.doCheckSub) {
        this.doCheckSub.unsubscribe();
      }
    }
  }
}
