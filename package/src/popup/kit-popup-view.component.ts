import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, TemplateRef } from '@angular/core';
import { KitCoreOverlayComponent, KitCoreOverlayContainerPosition } from '../overlay/meta';
import { isString } from '../util/is-string';
import { KitPopupType } from './meta';

@Component({
  selector: 'kit-popup-simple-view',
  template: `
    <kit-overlay-container *ngIf="opened"
                           [type]="type"
                           [anchor]="anchor"
                           [opened]="true"
                           [position]="position">
      <ng-container *ngIf="viewType === 'string'">{{ view }}</ng-container>
      <ng-container *ngIf="viewType !== 'string'">
        <ng-container *kitMultiOutlet="view; params: viewParams"></ng-container>
      </ng-container>
    </kit-overlay-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitPopupViewComponent implements KitCoreOverlayComponent, OnChanges {
  @Input() anchor: HTMLElement;

  @Input() color: string;

  @Input() opened = false;

  @Input() position: KitCoreOverlayContainerPosition;

  @Input() type: KitPopupType;

  @Input() view: string | TemplateRef<any> | any;

  @Input() viewParams: any;

  viewType: 'string' | 'template' | 'component' = 'string';

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.viewType = isString(this.view) ? 'string' : this.view instanceof TemplateRef ? 'template' : 'component';
    this.cdr.markForCheck();
    console.log('viewParams', this.viewParams);
  }

  cdrCheck() {
  }
}
