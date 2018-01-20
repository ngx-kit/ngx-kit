import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { KitCollapseHostService, KitCollapseItemService } from '@ngx-kit/core';

/**
 * @apiOrder 3
 */
@Component({
  selector: 'ui-side-menu-group',
  template: `
    <div class="title" (click)="toggle()">
      <span class="wrapper"><ng-content></ng-content></span>
      <button class="arrow">
        <ng-container *ngIf="activeState">&#10005;</ng-container>
        <ng-container *ngIf="!activeState">&#9661;</ng-container>
      </button>
    </div>
    <ng-content select="ui-side-menu-sub"></ng-content>
  `,
  styleUrls: ['./ui-side-menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiSideMenuGroupComponent implements OnInit, OnChanges {
  @Input() active: boolean;

  activeState = false;

  constructor(
    private item: KitCollapseItemService,
    private host: KitCollapseHostService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.host.activeChanges.subscribe(() => {
      this.activeState = this.item.active;
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('active' in changes) {
      this.item.active = this.active;
    }
  }

  toggle() {
    this.item.toggle();
  }
}
