import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-tabs-panel,[kitTabsPanel]',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
})
export class KitTabsPanelComponent implements OnInit {
  @Input() active: boolean;

  @HostBinding('class') hostClass: string;

  @Input() kitTabsPanel: any;

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
