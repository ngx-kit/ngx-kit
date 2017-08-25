import { Component, HostBinding, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'kit-tabs-panel,[kitTabsPanel]',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class KitTabsPanelComponent implements OnInit {
  @Input() active: boolean;

  @HostBinding('class') hostClass: string;

  @Input() kitTabsPanel: any;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
