import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentAccordionPanel } from '../core/meta/tokens';

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

  ngOnInit() {
  }

  activateClick() {
    this.active = !this.active;
    if (this.active) {
      this.activate.emit(true);
    }
  }
}
