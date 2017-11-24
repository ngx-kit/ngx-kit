import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { KitCollapseHostService } from '../kit-collapse-host.service';
import { KitCollapseItemService } from '../kit-collapse-item.service';
import { takeUntil } from 'rxjs/operators';

/**
 * Structure directive that collapsing.
 *
 * State based on `KitCollapseItemService` provided on a parent.
 */
@Directive({
  selector: '[kitCollapse]',
})
export class KitCollapseDirective implements OnInit, OnDestroy {
  @Input() kitCollapse: void;

  private destroy = new Subject<void>();

  private displayed = false;

  constructor(private vcr: ViewContainerRef,
              private template: TemplateRef<any>,
              private host: KitCollapseHostService,
              private item: KitCollapseItemService) {
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.host.activeChanges
        .pipe(takeUntil(this.destroy))
        .subscribe(ids => {
          if (ids.has(this.item.id)) {
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
