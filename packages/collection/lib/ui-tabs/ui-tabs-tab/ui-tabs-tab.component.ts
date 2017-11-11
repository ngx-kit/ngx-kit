import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

/**
 * @apiOrder 3
 */
@Component({
  selector: 'ui-tabs-tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-tabs-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabsTabComponent implements OnInit, OnDestroy {
  @HostBinding('class.active') classActive = false;

  @Input() id: number;

  private destroy$ = new Subject<void>();

  constructor(private host: KitSlideHostService) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.host.active$
        .pipe(takeUntil(this.destroy$))
        .subscribe(id => {
          this.classActive = id === this.id;
        });
  }

  @HostListener('click')
  clickHandler() {
    this.host.active = this.id;
  }
}
