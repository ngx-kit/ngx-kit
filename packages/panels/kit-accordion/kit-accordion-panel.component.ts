import { Component, EventEmitter, HostBinding, Inject, Input, OnInit, Output } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentAccordionPanel, KitComponentStyle } from '@ngx-kit/core';

@Component({
  selector: 'kit-accordion-panel',
  template: `
    <div [styler]="['title', {active: active}]" (click)="activateClick()">{{ title }}</div>
    <div *ngIf="active" styler="content">
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitAccordionPanelComponent implements OnInit {

  @Input() active: boolean;
  @Input() title: string;

  @Output() activate = new EventEmitter<boolean>();

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAccordionPanel) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  activateClick() {
    this.active = !this.active;
    if (this.active) {
      this.activate.emit(true);
    }
  }

}
