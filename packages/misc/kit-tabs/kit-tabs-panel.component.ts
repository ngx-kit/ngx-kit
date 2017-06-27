import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-tabs-panel,[kit-tabs-panel],[kitTabsPanel]',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
})
export class KitTabsPanelComponent implements OnInit {

  @Input() kitTabsPanel: any;

  @Input() active: boolean;
  @Input() title: string;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
