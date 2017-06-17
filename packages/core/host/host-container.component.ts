import {
  AfterViewChecked, AfterViewInit, Component,
  ElementRef, EventEmitter, HostBinding, Inject, Input, NgZone, OnChanges, OnDestroy,
  OnInit, Output,
} from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { kitComponentHostContainer } from '../meta/tokens';
import { KitComponentStyle } from '../meta/component';
import { KitAnchorDirective } from './anchor.directive';

/**
 * @todo click hide
 * @todo dropdown - show at other side if space is not enough
 * @todo improve reposition performance
 * @todo impl type=side
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
export class KitHostContainerComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked {

  @Input() component: any;
  @Input() template: any;
  @Input() overlay: boolean;
  @Input() type: string;
  @Input() anchor: KitAnchorDirective;
  @Input() side: string;

  @Output() outsideClick = new EventEmitter<any>();

  @HostBinding('attr.sid') get hostClass() {
    return this.styler.host.sid;
  };

  holderStyle = {};

  constructor(private styler: StylerComponent,
              @Inject(kitComponentHostContainer) private style: KitComponentStyle,
              private zone: NgZone,
              private elementRef: ElementRef) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // @todo use renderer2 (currently it does not have listenGlobal)
      // reposition
      document.addEventListener('scroll', this.reposition, true);
      window.addEventListener('resize', this.reposition, true);
      // outside click
      document.addEventListener('click', this.clickListener);
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

  ngOnDestroy() {
    document.removeEventListener('scroll', this.reposition, true);
    window.removeEventListener('resize', this.reposition, true);
    document.removeEventListener('click', this.clickListener);
  }

  private reposition = () => {
    if (this.type === 'dropdown') {
      const el: HTMLElement = this.anchor.nativeEl;
      const rect: ClientRect = el.getBoundingClientRect();
      this.zone.run(() => {
        this.holderStyle = {
          position: 'fixed',
          top: `${Math.round(rect.top + el.offsetHeight)}px`,
          left: `${Math.round(rect.left)}px`,
          width: `${Math.round(el.offsetWidth)}px`
        };
      });
    } else {
      this.holderStyle = {};
    }
  };

  private clickListener = (event: MouseEvent) => {
    const path = event['path'];
    if (path.indexOf(this.elementRef.nativeElement) === -1) {
      this.zone.run(() => {
        this.outsideClick.emit(true);
      });
    }
  };

}
