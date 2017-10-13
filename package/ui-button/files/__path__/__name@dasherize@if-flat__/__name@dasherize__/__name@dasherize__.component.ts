import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional, } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>GroupComponent } from '../<%= dasherize(name) %>-group/<%= dasherize(name) %>-group.component';
import { <%= classify(name) %>Color, <%= classify(name) %>Size } from '../meta';

/**
 * @apiOrder 1
 */
@Component({
  // tslint:disable-next-line
  selector: 'button[<%= camelize(name) %>],a[<%= camelize(name) %>]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  providers: [
    KitClassService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component implements OnInit, OnChanges {
  @Input() color: <%= classify(name) %>Color = 'default';

  @Input() disabled = false;

  @Input() <%= camelize(name) %>: void;

  @Input() size: <%= classify(name) %>Size = 'm';

  constructor(private kitClass: KitClassService,
              @Optional() private group: <%= classify(name) %>GroupComponent) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      disabled: this.disabled,
      color: this.color,
      size: this.size,
      groupDirection: !!this.group ? this.group.direction : null,
    });
  }
}
