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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ws-kit-tabs-tab,[wsKitTabsTab]',
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
    this.host.activeChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(id => {
        this.classActive = id === this.id;
      });
  }

  @HostListener('click')
  clickHandler() {
    this.host.active = this.id;
  }
}
