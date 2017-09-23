import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ws-kit-tabs-panel,[wsKitTabsPanel]',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsPanelComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() wsKitTabsPanel: null;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
