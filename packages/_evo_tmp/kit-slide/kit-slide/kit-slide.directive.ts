import {
  ChangeDetectorRef,
  Directive,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { KitSlideHostService } from '../kit-slide-host.service';
import { KitSlideId } from '../meta';

/**
 * Structure directive that display slides.
 */
@Directive({
  selector: '[kitSlide]',
})
export class KitSlideDirective implements OnInit, OnDestroy, OnChanges {
  /**
   * Slide id.
   *
   * If not set will be generated automatically.
   */
  @Input() kitSlide: KitSlideId = null;

  private destroy = new Subject<void>();

  private displayed = false;

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private host: KitSlideHostService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitSlide'] && changes['kitSlide'].currentValue !== null) {
      this.host.deleteId(changes['kitSlide'].previousValue);
      this.host.addId(changes['kitSlide'].currentValue);
    }
  }

  ngOnDestroy() {
    this.host.deleteId(this.kitSlide);
    this.destroy.next();
  }

  ngOnInit() {
    // gen slideId if not set
    if (this.kitSlide === null) {
      this.kitSlide = this.host.genId();
      this.host.addId(this.kitSlide);
    }
    // handle displaying
    this.host.activeChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((id: string) => {
        if (id === this.kitSlide) {
          if (!this.displayed) {
            this.zone.run(() => {
              this.vcr.createEmbeddedView(this.template);
              this.displayed = true;
              this.cdr.detectChanges();
            });
          }
        } else {
          if (this.displayed) {
            this.zone.run(() => {
              this.vcr.clear();
              this.displayed = false;
              this.cdr.detectChanges();
            });
          }
        }
      });
  }
}
