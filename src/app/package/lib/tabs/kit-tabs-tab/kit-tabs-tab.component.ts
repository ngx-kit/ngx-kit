import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/ngx-kit';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

/**
 * @apiOrder 3
 */
@Component({
  selector: 'kit-tabs-tab,[kitTabsTab]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-tabs-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsTabComponent implements OnInit, OnDestroy {
  @HostBinding('class.active') classActive = false;

  @Input() id: number;

  @Input() kitTabsTab: void;

  private destroy$ = new Subject<void>();

  constructor(private host: KitSlideHostService) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.host.active$
        .takeUntil(this.destroy$)
        .subscribe(id => {
          this.classActive = id === this.id;
        });
  }

  @HostListener('click')
  clickHandler() {
    this.host.active = this.id;
  }
}
