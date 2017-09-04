import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitAccordionPanelStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-accordion-panel,[kitAccordionPanel]',
  template: `
    <div [styler]="'title'"
         [stylerState]="{active: active}"
         (click)="activateClick()">{{ title }}
    </div>
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

  @Input() kitAccordionPanel: null;

  @Input() title: string;

  private _active: boolean;

  constructor(private styler: StylerComponent,
              @Inject(kitAccordionPanelStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-accordion-panel';
    this.styler.register(this.style);
  }

  get active() {
    return this._active;
  }

  @Input()
  set active(active: boolean) {
    this._active = active;
    this.activate.emit(this._active);
    this.cdr.markForCheck();
  }

  ngOnInit() {
  }

  activateClick() {
    this.active = !this._active;
  }
}
