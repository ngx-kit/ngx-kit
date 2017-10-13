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
import { <%= classify(name) %>TitleComponent } from '../<%= dasherize(name) %>-title/<%= dasherize(name) %>-title.component';

const fadeOut = animation([
  style({opacity: 1}),
  animate(250, style({opacity: 0})),
]);

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  animations: [
    trigger(
        'fadeOut', [
          transition(':leave', useAnimation(fadeOut)),
        ],
    ),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component {
  /**
   * Display closing link that hides alert.
   */
  @Input() closable: boolean;

  /**
   * Alert close.
   */
  @Output('close') close = new EventEmitter<null>();

  @Input() color = 'default';

  @Input() isOpen = true;

  /**
   * Open state changes (including close event).
   */
  @Output() isOpenChange = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => <%= classify(name) %>TitleComponent)) title: <%= classify(name) %>TitleComponent;

  closeAlert() {
    this.isOpen = false;
    this.close.next(null);
    this.isOpenChange.next(false);
  }
}
