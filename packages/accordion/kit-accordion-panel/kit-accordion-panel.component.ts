import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  activateClick() {
    this.active = true;
    this.activate.emit(true);
  }

}
