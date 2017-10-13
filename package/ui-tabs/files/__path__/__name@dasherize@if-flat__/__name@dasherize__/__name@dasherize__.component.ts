import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/ngx-kit';

/**
 * @apiOrder 1
 */
@Component({
  selector: '<%= dasherize(name) %>',
  template: `
    <ng-content select="<%= dasherize(name) %>-nav"></ng-content>
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class <%= classify(name) %>Component implements OnInit {
  /**
   * Automatically activate first tab.
   */
  @Input() activateFirst = true;

  constructor(private host: KitSlideHostService) {
  }

  ngOnInit() {
    this.host.activateFirst = this.activateFirst;
  }
}
