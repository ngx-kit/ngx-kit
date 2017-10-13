import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>GroupDirection } from '../meta';

/**
 * @apiOrder 2
 */
@Component({
  selector: '<%= dasherize(name) %>-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./<%= dasherize(name) %>-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitClassService,
  ],
})
export class <%= classify(name) %>GroupComponent implements OnInit, OnChanges {
  @Input() direction: <%= classify(name) %>GroupDirection = 'row';

  constructor(private kitClass: KitClassService) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      direction: this.direction,
    });
  }
}
