import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/ngx-kit';

/**
 * @apiOrder 3
 */
@Component({
  selector: '<%= dasherize(name) %>-group',
  template: `
    <div class="title" (click)="toggle()">
      <span class="wrapper"><ng-content></ng-content></span>
      <button class="arrow">
        <ng-container *ngIf="active">&#10005;</ng-container>
        <ng-container *ngIf="!active">&#9661;</ng-container>
      </button>
    </div>
    <ng-content select="<%= dasherize(name) %>-sub"></ng-content>
  `,
  styleUrls: ['./<%= dasherize(name) %>-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class <%= classify(name) %>GroupComponent {
  constructor(private item: KitCollapseItemService) {
  }

  get active() {
    return this.item.active;
  }

  toggle() {
    this.item.toggle();
  }
}
