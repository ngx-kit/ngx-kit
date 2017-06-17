import { Component, HostBinding, Inject, Input, NgZone, OnChanges, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { kitComponentHostContainer } from '../meta/tokens';
import { KitComponentStyle } from '../meta/component';
import { KitAnchorDirective } from './anchor.directive';

@Component({
  selector: 'kit-host-container',
  template: `
    <div [ngStyle]="holderStyle">
      <div *ngIf="component">
        <ng-container *ngComponentOutlet="component"></ng-container>
      </div>
      <div *ngIf="template">
        <ng-container *ngTemplateOutlet="template"></ng-container>
      </div>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitHostContainerComponent implements OnInit, OnChanges {

  @Input() component: any;
  @Input() template: any;
  @Input() position: string;
  @Input() overlay: boolean;
  @Input() anchor: KitAnchorDirective;

  @HostBinding('attr.sid') get hostClass() {
    return this.styler.host.sid;
  };

  holderStyle = {};

  private cacheTop: number;
  private cacheLeft: number;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentHostContainer) private style: KitComponentStyle,
              private zone: NgZone) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // @todo use renderer2 (currently it does not have listenGlobal
      document.addEventListener('scroll', () => {
        this.reposition();
      }, true);
      document.addEventListener('resize', () => {
        this.reposition();
      }, true);
    });
  }

  ngOnChanges() {
    this.styler.host.applyState({
      position: this.position,
      overlay: this.overlay,
    });
    this.reposition();
  }

  private reposition() {
    if (this.position === 'anchor') {
      const rect = this.anchor.nativeEl.getBoundingClientRect();
      if (this.cacheTop !== rect.top || this.cacheLeft !== rect.left) {
        this.cacheTop = rect.top;
        this.cacheLeft = rect.left;
        this.zone.run(() => {
          this.holderStyle = {
            position: 'fixed',
            top: `${Math.round(rect.top)}px`,
            left: `${Math.round(rect.left + rect.width / 2)}px`,
          };
        });
      }
      console.log('hS', this.holderStyle);
    } else {
      this.holderStyle = {};
    }
  }

}
