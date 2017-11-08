import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/core';

/**
 * @apiOrder 3
 */
@Component({
  selector: 'ui-side-menu-group',
  template: `
    <div class="title" (click)="toggle()">
      <span class="wrapper"><ng-content></ng-content></span>
      <button class="arrow">
        <ng-container *ngIf="active">&#10005;</ng-container>
        <ng-container *ngIf="!active">&#9661;</ng-container>
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
export class UiSideMenuGroupComponent {
  constructor(private item: KitCollapseItemService) {
  }

  get active() {
    return this.item.active;
  }

  toggle() {
    this.item.toggle();
  }
}
