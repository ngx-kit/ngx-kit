import {
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, HostBinding, Inject, Input, NgZone, OnChanges,
  OnInit, TemplateRef
} from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { kitComponentHostContainer } from '../meta/tokens';
import { KitComponentStyle } from '../meta/component';
import { KitAnchorDirective } from './anchor.directive';

/**
 * @todo click hide
 * @todo dropdown - show at other side if space is not enough
 * @todo improve reposition performance
 */
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
export class KitHostContainerComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {

  @Input() component: any;
  @Input() template: any;
  @Input() overlay: boolean;
  @Input() type: string;
  @Input() anchor: KitAnchorDirective;
  @Input() side: string;

  @HostBinding('attr.sid') get hostClass() {
    return this.styler.host.sid;
  };

  holderStyle = {};

  constructor(private styler: StylerComponent,
              @Inject(kitComponentHostContainer) private style: KitComponentStyle,
              private zone: NgZone) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // @todo use renderer2 (currently it does not have listenGlobal)
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
      overlay: this.overlay,
      type: this.type,
    });
    this.reposition();
  }

  ngAfterViewInit() {
    this.reposition();
  }

  ngAfterViewChecked() {
    this.reposition();
  }

  private reposition() {
    if (this.type === 'dropdown') {
      const el: HTMLElement = this.anchor.nativeEl;
      console.log('natEl', el);
      const rect: ClientRect = el.getBoundingClientRect();
      this.zone.run(() => {
        this.holderStyle = {
          position: 'fixed',
          top: `${Math.round(rect.top + el.offsetHeight)}px`,
          left: `${Math.round(rect.left)}px`,
          width: `${Math.round(el.offsetWidth)}px`
        };
      });
      console.log('rect', rect);
      console.log('hS', this.holderStyle);
    } else {
      this.holderStyle = {};
    }
  }

}
