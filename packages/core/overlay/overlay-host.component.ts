import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { OverlayContainerPosition, OverlayContainerWidthType } from '../meta/overlay';

@Component({
  selector: 'kit-overlay-host',
  template: `
    <kit-overlay-container [overlay]="overlay"
                           [anchor]="anchor"
                           [type]="type"
                           [position]="position"
                           [widthType]="widthType"
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
  @Input() anchor: HTMLElement;
  @Input() type: string;
  @Input() position: OverlayContainerPosition;
  @Input() widthType: OverlayContainerWidthType;

  @Output() outsideClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
