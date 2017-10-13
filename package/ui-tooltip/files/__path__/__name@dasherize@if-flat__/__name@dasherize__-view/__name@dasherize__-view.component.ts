import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import {
  KitClassService,
  KitCoreOverlayContainerPosition,
  KitOverlayPositionService,
  KitStyleService,
} from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>Colors } from '../meta';

@Component({
  selector: '<%= dasherize(name) %>-view',
  template: `{{ content }}`,
  styleUrls: ['./<%= dasherize(name) %>-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
    KitClassService,
  ],
})
export class <%= classify(name) %>ViewComponent implements OnChanges {
  @Input() anchorEl: HTMLElement;

  @Input() color: <%= classify(name) %>Colors;

  @Input() content: string;

  @Input() position: KitCoreOverlayContainerPosition;

  constructor(private overlayPosition: KitOverlayPositionService,
              private kitClass: KitClassService) {
  }

  ngOnChanges() {
    // position service
    this.overlayPosition.anchor = this.anchorEl;
    this.overlayPosition.position = this.position;
    this.overlayPosition.reposition();
    // class
    this.kitClass.apply({
      color: this.color,
    });
  }
}
