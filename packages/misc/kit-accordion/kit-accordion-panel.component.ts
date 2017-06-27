import { Component, EventEmitter, HostBinding, Inject, Input, OnInit, Output } from '@angular/core';
import { kitComponentAccordionPanel, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-accordion-panel,[kit-accordion-panel],[kitAccordionPanel]',
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
  @Output() activate = new EventEmitter<boolean>();

  @Input() active: boolean;

  @Input() kitAccordionPanel: any;

  @Input() title: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAccordionPanel) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  };

  ngOnInit() {
  }

  activateClick() {
    this.active = !this.active;
    if (this.active) {
      this.activate.emit(true);
    }
  }
}
