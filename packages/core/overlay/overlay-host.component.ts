import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { OverlayContainerPosition } from '../meta/overlay';

@Component({
  selector: 'kit-overlay-host',
  template: `
    <kit-overlay-container [overlay]="overlay"
                           [type]="type"
                           [anchor]="anchor"
                           [position]="position"
                           (outsideClick)="outsideClick.emit($event)">
      <div *ngIf="component">
        <ng-container *ngTemplateOutlet="component"></ng-container>
      </div>
      <div *ngIf="template">
        <ng-container *ngTemplateOutlet="template"></ng-container>
      </div>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitOverlayHostComponent implements OnInit {

  @Input() component: any;
  @Input() template: any;
  @Input() overlay: boolean;
  @Input() type: string;
  @Input() anchor: HTMLElement;
  @Input() position: OverlayContainerPosition;

  @Output() outsideClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
