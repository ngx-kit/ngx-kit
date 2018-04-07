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
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

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

  private destroy = new Subject<void>();

  constructor(private host: KitSlideHostService) {
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.host.activeChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(id => {
        this.classActive = id === this.id;
      });
  }

  @HostListener('click')
  clickHandler() {
    if (this.id) {
      this.host.active = this.id;
    }
  }
}
