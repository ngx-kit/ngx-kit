import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
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
  animations: [
    trigger('host', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms', style({opacity: 0})),
      ]),
    ]),
  ],
})
export class <%= classify(name) %>ViewComponent implements OnChanges {
  @Input() anchorEl: HTMLElement;

  @Input() color: <%= classify(name) %>Colors;

  @Input() content: string;

  @HostBinding('@host') hostTrigger;

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
