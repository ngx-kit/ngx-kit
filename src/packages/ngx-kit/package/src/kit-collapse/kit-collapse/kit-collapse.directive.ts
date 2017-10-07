import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { KitCollapseHostService } from '../kit-collapse-host.service';
import { KitCollapseItemService } from '../kit-collapse-item.service';

@Directive({
  selector: '[kitCollapse]',
})
export class KitCollapseDirective implements OnInit, OnDestroy {
  @Input() kitCollapse: void;

  private destroy$ = new Subject<void>();

  private displayed = false;

  constructor(private vcr: ViewContainerRef,
              private template: TemplateRef<any>,
              private host: KitCollapseHostService,
              private item: KitCollapseItemService) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.host.active$
        .takeUntil(this.destroy$)
        .subscribe(ids => {
          if (ids.has(this.item.id  )) {
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
