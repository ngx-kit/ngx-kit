import { AfterContentInit, Component, ContentChildren, HostBinding, Input, OnInit, QueryList } from '@angular/core';

import { KitTabsPanelComponent } from '../kit-tabs-panel/kit-tabs-panel.component';

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

  @ContentChildren(KitTabsPanelComponent) tabs: QueryList<KitTabsPanelComponent>;

  navClass: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.activateFirst();
  }

  setActive(tab: KitTabsPanelComponent) {
    this.tabs.forEach(t => {
      t.active = t === tab;
    });
  }

  getTabClass(tab: KitTabsPanelComponent) {
//    const theme = this.service.getTheme();
//    return style(
//        theme.navTab.base,
//        this.core.mapColor('page', theme.navTab.baseSwatchMap),
//        tab.active ? theme.navTab.active : null,
//        tab.active ? this.core.mapColor('page', theme.navTab.activeSwatchMap): null,
//    );
  }

  private activateFirst() {
    if (this.firstActivate) {
      if (!this.tabs.find(t => t.active)) {
        this.tabs.first.active = true;
      }
    }
  }
//
//  this.theme = {
//  host: {
//    base: {
//    },
//  },
//  nav: {
//    base: {
//      display: 'flex',
//      flexDirection: 'row',
//      listStyle: 'none',
//      margin: 0,
//      padding: 0,
//    },
//  },
//  navTab: {
//    base: {
//      cursor: 'pointer',
//      padding: '8px',
//    },
//    baseSwatchMap: {
//      color: 'text',
//      background: 'color',
//    },
//    active: {
//      fontWeight: 600,
//    },
//    activeSwatchMap: {
//      color: 'text',
//      background: 'darken',
//    }
//  },
//};

}
