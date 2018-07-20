import { animate, animation, style, transition, trigger, useAnimation, } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { UiAlertTitleComponent } from '../ui-alert-title/ui-alert-title.component';

const fadeOut = animation([
  style({opacity: 1}),
  animate(250, style({opacity: 0})),
]);

@Component({
  selector: 'ui-alert',
  templateUrl: './ui-alert.component.html',
  styleUrls: ['./ui-alert.component.scss'],
  animations: [
    trigger(
      'fadeOut', [
        transition(':leave', useAnimation(fadeOut)),
      ],
    ),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAlertComponent {
  /**
   * Display closing link that hides alert.
   */
  @Input() closable: boolean;

  /**
   * Alert close.
   */
  @Output() close = new EventEmitter<null>();

  @Input() color = 'default';

  @Input() isOpen = true;

  /**
   * Open state changes (including close event).
   */
  @Output() isOpenChange = new EventEmitter<boolean>();

  @ContentChild(forwardRef(() => UiAlertTitleComponent)) title: UiAlertTitleComponent;

  closeAlert() {
    this.isOpen = false;
    this.close.next(null);
    this.isOpenChange.next(false);
  }
}
