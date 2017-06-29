import { AfterContentInit, Component, ContentChildren, Inject, Input, OnInit, QueryList, } from '@angular/core';
import { KitComponentStyle, kitComponentTabs } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitTabsPanelComponent } from './kit-tabs-panel.component';

@Component({
  selector: 'kit-tabs,[kit-tabs],[kitTabs]',
  template: `
    <ul styler="nav">
      <li *ngFor="let tab of tabs"
          [styler]="['tab', {active: tab.active}]"
          (click)="setActive(tab)">
        {{ tab.title }}
      </li>
    </ul>
    <div styler="panel">
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTabsComponent implements OnInit, AfterContentInit {
  @Input() firstActivate = true;

  @Input() kitTabs: any;

  @ContentChildren(KitTabsPanelComponent) tabs: QueryList<KitTabsPanelComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTabs) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
    this.activateFirst();
  }

  ngOnInit() {
  }

  setActive(tab: KitTabsPanelComponent) {
    this.tabs.forEach(t => {
      t.active = t === tab;
    });
  }

  private activateFirst() {
    if (this.firstActivate) {
      if (!this.tabs.find(t => t.active)) {
        this.tabs.first.active = true;
      }
    }
  }
}
