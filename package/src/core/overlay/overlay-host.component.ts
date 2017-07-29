import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { OverlayContainerPosition, OverlayContainerWidthType } from '../meta/overlay';

@Component({
  selector: 'kit-overlay-host,[kitOverlayHost]',
  template: `
    <kit-overlay-container [overlay]="overlay"
                           [anchor]="anchor"
                           [type]="type"
                           [opened]="opened"
                           [position]="position"
                           [widthType]="widthType"
                           (outsideClick)="outsideClick.emit($event)"
                           (mouseenter)="containerMouseEnter.emit()"
                           (mouseleave)="containerMouseLeave.emit()">
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
  @Input() anchor: HTMLElement;

  @Input() component: any;

  @Output() containerMouseEnter = new EventEmitter<any>();

  @Output() containerMouseLeave = new EventEmitter<any>();

  @Input() kitOverlayHost: any;

  @Input() opened: boolean;

  @Output() outsideClick = new EventEmitter<any>();

  @Input() overlay: boolean;

  @Input() position: OverlayContainerPosition;

  @Input() template: any;

  @Input() type: string;

  @Input() widthType: OverlayContainerWidthType;

  constructor() {
  }

  ngOnInit() {
  }
}
