import { Component, EventEmitter, HostBinding, HostListener, Inject, Input, OnInit, Output } from '@angular/core';

import { kitComponentButton, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

import { KitButtonGroupDirection } from '../interfaces';

// @todo proxy enter listener to (action)
@Component({
  selector: 'kit-button',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonComponent implements OnInit {

  @Input() set size(size: string) {
    this.styler.host.applyState({size});
  }

  @Input() set type(type: string) {
    this.styler.host.applyState({type});
  }

  @Input() set disabled(disabled: boolean) {
    this.styler.host.applyState({disabled});
  }

  @Input() set selected(selected: boolean) {
    this._selected = selected;
    this.styler.host.applyState({selected});
  }

  @Output() selectedChanged = new EventEmitter<boolean>();

  @Output() action = new EventEmitter<any>();

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  @HostListener('click') clickListener(event: MouseEvent) {
    this.action.emit(event);
  }

  private _selected = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButton) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  set grouped(direction: KitButtonGroupDirection) {
    this.styler.host.applyState({grouped: direction});
  }

  pushSelected(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
  }

  get selected(): boolean {
    return this._selected;
  }

}
