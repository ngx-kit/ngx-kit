import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-tabs-panel',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
})
export class KitTabsPanelComponent implements OnInit {

  @Input() active: boolean;
  @Input() title: string;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
