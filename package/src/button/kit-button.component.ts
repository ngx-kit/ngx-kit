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
// @todo press enter handler
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
  /**
   * Emits when button was submitted.
   * By default: click or press enter in focus state.
   */
  @Output() action = new EventEmitter<Event>();

  /**
   * In a disabled state does not raise click event.
   */
  @Input() disabled: boolean;

  @Input() grouped: KitButtonGroupDirection;

  @Input() kitButton: null;

  /**
   * Show progress and prevent actions.
   */
  @Input() loading: boolean;

  @Input() params: any;

  /**
   * Selected state in kit-button-group.
   */
  @Input() selected: boolean;

  @Output() selectedChanged = new EventEmitter<boolean>();

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

  /**
   * Listen to mouse clicks on element.
   *
   * Here some experiments
   *
   * Here some additional info https://ngx-kit.com
   */
  @HostListener('click')
  clickListener(event: MouseEvent) {
    if (!this.loading && !this.disabled) {
      this.action.emit(event);
    }
  }

  pushSelected(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
  }
}
