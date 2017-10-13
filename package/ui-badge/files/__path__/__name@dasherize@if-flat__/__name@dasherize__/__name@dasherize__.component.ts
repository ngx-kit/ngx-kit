import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>Color, <%= classify(name) %>Position, <%= classify(name) %>Size } from '../meta';

/**
 * @todo overflowCount - max count
 * @todo showZero
 */
@Component({
  selector: '<%= dasherize(name) %>',
  template: `
    {{ count }}
  `,
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KitClassService],
})
export class <%= classify(name) %>Component implements OnInit, OnChanges {
  @Input() color: <%= classify(name) %>Color = 'default';

  /**
   * Number displayed on badge.
   */
  @Input() count: number;

  /**
   * If use corner position, do not forget to set relative position to parent.
   */
  @Input() position: <%= classify(name) %>Position = 'inline';

  @Input() size: <%= classify(name) %>Size = 'm';

  constructor(private kitClass: KitClassService) {
  }

  ngOnChanges() {
    this.kitClass.apply({
      size: this.size,
      position: this.position,
      color: this.color,
    });
  }

  ngOnInit() {
  }
}
