import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/ngx-kit';

/**
 * @apiOrder 2
 */
@Component({
  selector: '<%= dasherize(name) %>-item,a[<%= camelize(name) %>Item]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./<%= dasherize(name) %>-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class <%= classify(name) %>ItemComponent {
  @Input() <%= camelize(name) %>Item: void;
}
