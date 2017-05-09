import { AfterContentInit, Component, ContentChildren, HostBinding, Input, OnInit, QueryList } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitTabsService } from '../kit-tabs.service';
import { KitTabComponent } from '../kit-tab/kit-tab.component';

@Component({
  selector: 'kit-tabs',
  template: `
    <ul [class]="navClass">
      <li *ngFor="let tab of tabs"
          [class]="getTabClass(tab)"
          (click)="setActive(tab)">
        {{ tab.title }}
      </li>
    </ul>
    <ng-content></ng-content>
  `,
})
export class KitTabsComponent implements OnInit, AfterContentInit {

  @Input() firstActivate = true;

  @HostBinding('class') hostClass: string;

  @ContentChildren(KitTabComponent) tabs: QueryList<KitTabComponent>;

  navClass: string;

  constructor(private core: KitCoreService,
              private service: KitTabsService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  ngAfterContentInit() {
    this.activateFirst();
  }

  setActive(tab: KitTabComponent) {
    console.log('sA', tab);
    this.tabs.forEach(t => {
      t.active = t === tab;
    });
  }

  getTabClass(tab: KitTabComponent): string {
    const theme = this.service.getTheme();
    return style(
        theme.navTab.base,
        this.core.mapColor('page', theme.navTab.baseSwatchMap),
        tab.active ? theme.navTab.active : null,
        tab.active ? this.core.mapColor('page', theme.navTab.activeSwatchMap): null,
    );
  }

  private calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.host.base,
    );
    this.navClass = style(
        theme.nav.base,
    );
  }

  private compileStyles() {
  }

  private activateFirst() {
    if (this.firstActivate) {
      if (!this.tabs.find(t => t.active)) {
        this.tabs.first.active = true;
      }
    }
  }

}
