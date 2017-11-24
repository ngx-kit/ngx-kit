import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { KitSlideHostService } from '../kit-slide-host.service';
import { KitSlideId } from '../meta';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private vcr: ViewContainerRef,
              private template: TemplateRef<any>,
              private host: KitSlideHostService) {
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
        .subscribe(id => {
          if (id === this.kitSlide) {
            if (!this.displayed) {
              this.vcr.createEmbeddedView(this.template);
              this.displayed = true;
            }
          } else {
            if (this.displayed) {
              this.vcr.clear();
              this.displayed = false;
            }
          }
        });
  }
}
