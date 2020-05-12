import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isArray, KitCollapseHostService, KitCollapseItemService } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-vertical-menu-group',
  template: `
    <div class="title" (click)="toggle()">
      <span class="wrapper"><ng-content></ng-content></span>
      <button class="arrow">
        <ng-container *ngIf="activeState">&#10005;</ng-container>
        <ng-container *ngIf="!activeState">&#9661;</ng-container>
      </button>
    </div>
    <ng-content select="ui-vertical-menu-sub"></ng-content>
  `,
  styleUrls: ['./ui-vertical-menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiVerticalMenuGroupComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * Force active state.
   */
  @Input() active: boolean;

  /**
   * Set active on route match.
   */
  @Input() activeRoute: any[] | string;

  activeState = false;

  private destroy = new Subject();

  constructor(
    private item: KitCollapseItemService,
    private host: KitCollapseHostService,
    private cdr: ChangeDetectorRef,
    @Optional() private router: Router,
  ) {
  }

  ngOnInit() {
    this.host.activeChanges.subscribe(() => {
      this.activeState = this.item.active;
      this.cdr.detectChanges();
    });
    // Check route active
    if (this.router) {
      // Open if needed
      if (this.item.active !== this.isLinkActive()) {
        this.item.active = true;
      }
      // Watch route changes
      this.router.events
        .pipe(
          takeUntil(this.destroy),
          filter(e => e instanceof NavigationEnd),
        )
        .subscribe(() => {
          if (this.item.active !== this.isLinkActive()) {
            this.item.active = true;
          }
        });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('active' in changes) {
      this.item.active = this.active;
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  toggle() {
    this.item.toggle();
  }

  private isLinkActive(): boolean {
    if (this.activeRoute) {
      const urlTree = this.router
        .createUrlTree(isArray(this.activeRoute) ? this.activeRoute : [this.activeRoute]);
      return this.router.isActive(urlTree, false);
    } else {
      return false;
    }
  }
}
