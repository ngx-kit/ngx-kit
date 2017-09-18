import { animate, animation, style, transition, trigger, useAnimation, } from '@angular/animations';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { KitAlertTitleComponent } from '../kit-alert-title/kit-alert-title.component';

const fadeOut = animation([
  style({opacity: 1}),
  animate(250, style({opacity: 0})),
]);

@Component({
  selector: 'kit-alert,[kitAlert]',
  templateUrl: './kit-alert.component.html',
  styleUrls: ['./kit-alert.component.scss'],
  animations: [
    trigger(
        'fadeOut', [
          transition(':leave', useAnimation(fadeOut)),
        ],
    ),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAlertComponent implements OnChanges, AfterContentInit {
  /**
   * Display closing link that hides alert.
   */
  @Input() closable: boolean;

  /**
   * Alert close.
   */
  @Output('close') close = new EventEmitter<null>();

  /**
   * Closing link text.
   */
  @Input() closeText: string;

  @Input() color = 'default';

  @Input() isOpen = true;

  /**
   * Open state changes (including close event).
   */
  @Output() isOpenChange = new EventEmitter<boolean>();

  @Input() kitAlert: null;

  @ContentChild(forwardRef(() => KitAlertTitleComponent)) title: KitAlertTitleComponent;

  ngAfterContentInit() {
  }

  ngOnChanges() {
//    this.styler.host.applyState({
//      closed: !this.isOpen,
//      color: this.color,
//    });
  }

  closeAlert() {
    this.isOpen = false;
    this.close.next(null);
    this.isOpenChange.next(false);
  }
}
