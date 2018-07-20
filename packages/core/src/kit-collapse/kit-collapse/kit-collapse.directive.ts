import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { KitCollapseHostService } from '../kit-collapse-host.service';
import { KitCollapseItemService } from '../kit-collapse-item.service';

/**
 * Structure directive that collapsing.
 *
 * State based on `KitCollapseItemService` provided on a parent.
 */
@Directive({
  selector: '[kitCollapse]',
})
export class KitCollapseDirective implements OnInit, OnDestroy {
  /**
   * @internal
   */
  @Input() kitCollapse: void;

  private destroy = new Subject<void>();

  private displayed = false;

  private viewRef?: ViewRef;

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private host: KitCollapseHostService,
    private item: KitCollapseItemService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.host.activeChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(ids => {
        if (ids.has(this.item.id)) {
          if (!this.viewRef) {
            this.viewRef = this.vcr.createEmbeddedView(this.template);
            this.cdr.detectChanges();
          }
        } else {
          if (this.viewRef) {
            this.vcr.clear();
            this.viewRef = undefined;
            this.cdr.detectChanges();
          }
        }
      });
  }
}
