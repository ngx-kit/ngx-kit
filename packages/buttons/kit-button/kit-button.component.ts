import { Component, EventEmitter, HostBinding, HostListener, Inject, Input, OnInit, Output } from '@angular/core';
import { kitComponentButton, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitButtonGroupDirection } from '../interfaces';

// @todo proxy enter listener to (action)
@Component({
  selector: 'kit-button,[kit-button],[kitButton]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonComponent implements OnInit {
  @Output() action = new EventEmitter<any>();

  @Input() kitButton: any;

  @Output() selectedChanged = new EventEmitter<boolean>();

  private _selected = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButton) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set disabled(disabled: boolean) {
    this.styler.host.applyState({disabled});
  }

  set grouped(direction: KitButtonGroupDirection) {
    this.styler.host.applyState({grouped: direction});
  }

  get selected(): boolean {
    return this._selected;
  }

  @Input()
  set selected(selected: boolean) {
    this._selected = selected;
    this.styler.host.applyState({selected});
  }

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  };

  @Input()
  set size(size: string) {
    this.styler.host.applyState({size});
  }

  @Input()
  set type(type: string) {
    this.styler.host.applyState({type});
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickListener(event: MouseEvent) {
    this.action.emit(event);
  }

  pushSelected(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
  }
}
