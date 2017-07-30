import { Component, EventEmitter, HostListener, Inject, Input, OnChanges, OnInit, Output, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentButton } from '../core/meta/tokens';
import { kitButtonGroupDirection } from './meta';

// @todo proxy enter listener to (action)
@Component({
  selector: 'kit-button,[kitButton]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonComponent implements OnInit, OnChanges {
  @Output() action = new EventEmitter<any>();

  @Input() color: string;

  @Input() disabled: boolean;

  @Input() grouped: kitButtonGroupDirection;

  @Input() kitButton: any;

  @Input() link: boolean;

  @Input() loading: boolean;

  @Input() selected: boolean;

  @Output() selectedChanged = new EventEmitter<boolean>();

  @Input() size: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButton) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.styler.host.state = {
      color: this.color,
      disabled: this.disabled,
      grouped: this.grouped,
      link: this.link,
      loading: this.loading,
      selected: this.selected,
      size: this.size,
    };
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickListener(event: MouseEvent) {
    if (!this.loading) {
      this.action.emit(event);
    }
  }

  pushSelected(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
  }
}
