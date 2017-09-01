import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponent, KitComponentStyle } from '../core/meta/component';
import { kitButtonStyle } from '../core/meta/tokens';
import { KitButtonGroupDirection } from './meta';

// @todo proxy enter listener to (action)
@Component({
  selector: 'kit-button,[kitButton]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitButtonComponent implements KitComponent, OnInit, OnChanges {
  @Output() action = new EventEmitter<any>();

  @Input() disabled: boolean;

  @Input() grouped: KitButtonGroupDirection;

  @Input() kitButton: any;

  @Input() loading: boolean;

  @Input() selected: boolean;

  @Output() selectedChanged = new EventEmitter<boolean>();

  @Input() params: any;

  constructor(public readonly styler: StylerComponent,
              @Inject(kitButtonStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-button';
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.styler.host.state = {
      disabled: this.disabled,
      grouped: this.grouped,
      loading: this.loading,
      selected: this.selected,
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
