import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitAccordionPanelStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-accordion-panel,[kitAccordionPanel]',
  template: `
    <div [styler]="'title'"
         [stylerState]="{active: active}"
         (click)="activateClick()">{{ title }}</div>
    <div *ngIf="active" styler="content">
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAccordionPanelComponent implements OnInit {
  @Output() activate = new EventEmitter<boolean>();

  @Input() active: boolean;

  @Input() kitAccordionPanel: any;

  @Input() title: string;

  constructor(private styler: StylerComponent,
              @Inject(kitAccordionPanelStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-accordion-panel';
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
