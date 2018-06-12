import { Directive, ElementRef, Input, NgZone, OnChanges } from '@angular/core';
import { take } from 'rxjs/operators';
import { KitAnchor } from '../../kit-anchor/meta';
import { KitEventManagerService } from '../../kit-event-manager/kit-event-manager.service';
import { StrategyEl } from '../../kit-overlay/meta';
import { KitPlatformService } from '../../kit-platform/kit-platform.service';
import { KitStyleService } from '../../kit-style/kit-style.service';
import { KitStyles } from '../../kit-style/meta';
import { KitPositionField, KitPositionRect, KitPinPosition } from '../meta';

@Directive({
  selector: '[kitPinPosition]',
  providers: [
    KitStyleService,
  ],
})
export class KitPinPositionDirective implements OnChanges {
  @Input() kitPinPosition: void;

  @Input() anchor: KitAnchor | HTMLElement;

  @Input() position: KitPinPosition;

  private unsubs: any[] = [];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private style: KitStyleService,
    private platform: KitPlatformService,
    private em: KitEventManagerService,
  ) {
    this.style.style = {
      left: '0',
      position: 'fixed',
      top: '0',
    };
    if (this.platform.isBrowser()) {
      this.zone.onStable
        .pipe(take(1))
        .subscribe(() => {
          this.zone.runOutsideAngular(() => {
            this.unsubs = [
              ...this.unsubs,
              this.em.listenGlobal('scroll', this.reposition.bind(this), true),
              this.em.listenGlobal('resize', this.reposition.bind(this), true),
            ];
          });
        });
      // Handle auto-fix for automatic reposition
//      this.unsubs.push(this.zone.onStable
//        .subscribe(() => {
//          if (this.rawPosition) {
//            this.rawPosition = false;
//            this.runAutofix();
//          }
//        }));
    }
  }

  ngOnChanges() {
    this.reposition();
  }

  private reposition() {
    const field = this.getField();
    const anchor = this.getRect(this.anchor);
    this.style.style = this.calc(this.position, field, anchor);
  }

  private calc(
    position: string,
    field: KitPositionField,
    anchor: KitPositionRect,
  ): KitStyles {
    const common = {
      display: 'flex',
      position: 'fixed',
    };
    const vSideLeft = field.width / 2 > anchor.left + anchor.width / 2;
    const vSideTop = field.height / 2 > anchor.top + anchor.height / 2;
    switch (this.position) {
      case 'top':
        return {
          ...common,
          alignItems: 'flex-end',
          top: '0',
          flexDirection: 'row',
          height: this.px(anchor.top),
          left: this.px(anchor.left),
          width: this.px(anchor.width),
        };
      case 'top-center':
        return {
          ...common,
          alignItems: 'flex-end',
          top: '0',
          flexDirection: 'row',
          justifyContent: 'center',
          height: this.px(anchor.top),
          left: vSideLeft ? '0' : this.px(anchor.left - (field.width - anchor.right)),
          width: vSideLeft ? this.px(anchor.left + anchor.right) : this.px(anchor.width + (field.width - anchor.right) * 2),
        };
      case 'top-right':
        return {
          ...common,
          alignItems: 'flex-end',
          top: '0',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: this.px(anchor.top),
          left: '0',
          width: this.px(anchor.right),
        };
      case 'top-left':
        return {
          ...common,
          alignItems: 'flex-end',
          top: '0',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: this.px(anchor.top),
          left: this.px(anchor.left),
          width: this.px(field.width - anchor.left),
        };
      case 'right':
        return {
          ...common,
          flexDirection: 'column',
          height: this.px(anchor.height),
          left: this.px(anchor.right),
          top: this.px(anchor.top),
        };
      case 'right-center':
        return {
          ...common,
          flexDirection: 'column',
          justifyContent: 'center',
          height: vSideTop ? this.px(anchor.top + anchor.bottom) : this.px(anchor.height + (field.height - anchor.bottom) * 2),
          left: this.px(anchor.right),
          top: vSideTop ? '0' : this.px(anchor.top - (field.height - anchor.bottom)),
        };
      case 'right-top':
        return {
          ...common,
          flexDirection: 'column',
          height: this.px(field.height - anchor.top),
          justifyContent: 'flex-start',
          left: this.px(anchor.right),
          top: this.px(anchor.top),
        };
      case 'right-bottom':
        return {
          ...common,
          flexDirection: 'column',
          height: this.px(anchor.bottom),
          justifyContent: 'flex-end',
          left: this.px(anchor.right),
          top: '0',
        };
      case 'bottom':
        return {
          ...common,
          alignItems: 'flex-start',
          flexDirection: 'row',
          height: this.px(field.height - anchor.bottom),
          left: this.px(anchor.left),
          top: this.px(anchor.bottom),
          width: this.px(anchor.width),
        };
      case 'bottom-center':
        return {
          ...common,
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'center',
          height: this.px(field.height - anchor.bottom),
          left: vSideLeft ? '0' : this.px(anchor.left - (field.width - anchor.right)),
          top: this.px(anchor.bottom),
          width: vSideLeft ? this.px(anchor.left + anchor.right) : this.px(anchor.width + (field.width - anchor.right) * 2),
        };
      case 'bottom-right':
        return {
          ...common,
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: this.px(field.height - anchor.bottom),
          left: '0',
          width: this.px(anchor.right),
          top: this.px(anchor.bottom),
        };
      case 'bottom-left':
        return {
          ...common,
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: this.px(field.height - anchor.bottom),
          left: this.px(anchor.left),
          top: this.px(anchor.bottom),
          width: this.px(field.width - anchor.left),
        };
      case 'left':
        return {
          ...common,
          alignItems: 'flex-end',
          left: '0',
          flexDirection: 'column',
          height: this.px(anchor.height),
          top: this.px(anchor.top),
          width: this.px(anchor.left),
        };
      case 'left-center':
        return {
          ...common,
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'center',
          height: vSideTop ? this.px(anchor.top + anchor.bottom) : this.px(anchor.height + (field.height - anchor.bottom) * 2),
          left: '0',
          top: vSideTop ? '0' : this.px(anchor.top - (field.height - anchor.bottom)),
          width: this.px(anchor.left),
        };
      case 'left-top':
        return {
          ...common,
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: this.px(field.height - anchor.top),
          left: '0',
          right: this.px(field.width - anchor.left),
          top: this.px(anchor.top),
          width: this.px(anchor.left),
        };
      case 'left-bottom':
        return {
          ...common,
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: this.px(anchor.bottom),
          left: '0',
          top: '0',
          width: this.px(anchor.left),
        };
      default:
        throw new Error(`Position ${position} in not correct!`);
    }
  }

  private getRect(el: KitAnchor | HTMLElement): StrategyEl {
    return this.getEl(el).getBoundingClientRect();
  }

  private getEl(el: KitAnchor | HTMLElement): HTMLElement {
    return el['nativeEl'] ? el['nativeEl'] : el;
  }

  private getField(): KitPositionField {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  private px(value: number): string {
    return `${Math.round(value)}px`;
  }
}
