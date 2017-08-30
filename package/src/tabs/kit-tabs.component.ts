import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitTabsStyle } from '../core/meta/tokens';
import { KitTabsPanelComponent } from './kit-tabs-panel.component';

@Component({
  selector: 'kit-tabs,[kitTabs]',
  template: `
    <ul styler="nav">
      <li *ngFor="let tab of tabs; let index = index"
          [styler]="'tab'"
          [stylerState]="{active: index === active}"
          (click)="setActive(index)">
        {{ tab.title }}
      </li>
    </ul>
    <div styler="panel">
      <ng-content></ng-content>
      <ng-container *ngTemplateOutlet="panelRef"></ng-container>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsComponent implements OnInit, AfterContentInit, AfterContentChecked {
  active = 0;

  @Input() firstActivate = true;

  @Input() kitTabs: any;

  panelRef: TemplateRef<any> | null;

  @ContentChildren(forwardRef(() => KitTabsPanelComponent)) tabs: QueryList<KitTabsPanelComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitTabsStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-tabs';
    this.styler.register(this.style);
  }

  ngAfterContentChecked() {
    // @todo a lot of checks (content updates)
  }

  ngAfterContentInit() {
    this.refTab();
  }

  ngOnInit() {
  }

  setActive(index: number) {
    this.active = index;
    this.refTab();
  }

  private refTab() {
    const active = this.tabs.toArray()[this.active];
    this.panelRef = active ? active.templateRef : null;
  }
}
