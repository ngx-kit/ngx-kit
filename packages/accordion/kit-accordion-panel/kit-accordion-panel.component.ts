import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitAccordionService } from '../kit-accordion.service';

@Component({
  selector: 'kit-accordion-panel',
  template: `
    <div [class]="titleClass" (click)="activateClick()">{{ title }}</div>
    <div *ngIf="active" [class]="panelClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class KitAccordionPanelComponent implements OnInit {

  @Input() active: boolean;
  @Input() title: string;

  @Output() activate = new EventEmitter<boolean>();

  @HostBinding('class') hostClass: string;
  titleClass: string;
  panelClass: string;

  constructor(private core: KitCoreService,
              private service: KitAccordionService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  private compileStyles() {
  }

  calcStyles() {
    const theme = this.service.getTheme();
//    this.hostClass = style(
//        theme.host.base,
//    );
    this.titleClass = style(
        theme.panelTitle.base,
        this.core.mapColor('page', theme.panelTitle.swatchMap),
    );
    this.panelClass = style(
        theme.panel.base,
    );
  }

  activateClick() {
    this.active = true;
    this.activate.emit(true);
  }

}
