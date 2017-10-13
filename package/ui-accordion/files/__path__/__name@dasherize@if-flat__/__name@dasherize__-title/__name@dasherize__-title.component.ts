import { ChangeDetectionStrategy, Component, HostListener, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/ngx-kit';

/**
 * Accordion title.
 *
 * @apiOrder 3
 */
@Component({
  selector: '<%= dasherize(name) %>-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./<%= dasherize(name) %>-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>TitleComponent {
  constructor(private item: KitCollapseItemService) {
  }

  @HostListener('click')
  clickHandler() {
    this.item.toggle();
  }
}
