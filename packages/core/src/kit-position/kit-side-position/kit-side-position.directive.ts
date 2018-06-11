import { Directive, ElementRef, Input, NgZone, OnChanges } from '@angular/core';
import { take } from 'rxjs/operators';
import { KitAnchor } from '../../kit-anchor/meta';
import { KitEventManagerService } from '../../kit-event-manager/kit-event-manager.service';
import { StrategyEl } from '../../kit-overlay/meta';
import { KitPlatformService } from '../../kit-platform/kit-platform.service';
import { KitStyleService } from '../../kit-style/kit-style.service';
import { KitStyles } from '../../kit-style/meta';
import { KitPositionField, KitPositionRect, KitSidePosition } from '../meta';

@Directive({
  selector: '[kitSidePosition]',
  providers: [
    KitStyleService,
  ],
})
export class KitSidePositionDirective implements OnChanges {
  @Input() kitSidePosition: void;

  @Input() anchor: KitAnchor | HTMLElement;

  @Input() position: KitSidePosition;

  private unsubs: any[] = [];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private style: KitStyleService,
    private platform: KitPlatformService,
    private em: KitEventManagerService,
  ) {
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
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
    };
    const vSideLeft = field.width / 2 > anchor.left + anchor.width / 2;
    const vSideTop = field.height / 2 > anchor.top + anchor.height / 2;
    switch (this.position) {
      case 'top':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.top)}px`,
          flexDirection: 'row',
          left: `${Math.round(anchor.left)}px`,
          right: `${Math.round(field.width - anchor.right)}px`,
        };
      case 'top-center':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.top)}px`,
          flexDirection: 'row',
          left: vSideLeft ? '0' : `${Math.round(anchor.left - (field.width - anchor.right))}px`,
          right: vSideLeft ? `${Math.round(field.width - anchor.left - anchor.right)}px` : '0',
        };
      case 'top-right':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.top)}px`,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          left: '0',
          right: `${Math.round(field.width - anchor.right)}px`,
        };
      case 'top-left':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.top)}px`,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          left: `${Math.round(anchor.left)}px`,
          right: '0',
        };
      case 'right':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.bottom)}px`,
          flexDirection: 'column',
          left: `${Math.round(anchor.right)}px`,
          top: `${Math.round(anchor.top)}px`,
        };
      case 'right-center':
        return {
          ...common,
          bottom: vSideTop ? `${Math.round(field.height - anchor.top - anchor.bottom)}px` : '0',
          flexDirection: 'column',
          left: `${Math.round(anchor.right)}px`,
          top: vSideTop ? '0' : `${Math.round(anchor.top - (field.height - anchor.bottom))}px`,
        };
      case 'right-top':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.bottom)}px`,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          left: `${Math.round(anchor.right)}px`,
          top: `${Math.round(anchor.top)}px`,
        };
      case 'right-bottom':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.bottom)}px`,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          left: `${Math.round(anchor.right)}px`,
          top: `${Math.round(anchor.top)}px`,
        };
      case 'bottom':
        return {
          ...common,
          flexDirection: 'row',
          left: `${Math.round(anchor.left)}px`,
          right: `${Math.round(field.width - anchor.right)}px`,
          top: `${Math.round(anchor.bottom)}px`,
        };
      case 'bottom-center':
        return {
          ...common,
          flexDirection: 'row',
          left: vSideLeft ? '0' : `${Math.round(anchor.left - (field.width - anchor.right))}px`,
          right: vSideLeft ? `${Math.round(field.width - anchor.left - anchor.right)}px` : '0',
          top: `${Math.round(anchor.bottom)}px`,
        };
      case 'bottom-right':
        return {
          ...common,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          left: `${Math.round(anchor.left)}px`,
          right: `${Math.round(field.width - anchor.right)}px`,
          top: `${Math.round(anchor.bottom)}px`,
        };
      case 'bottom-left':
        return {
          ...common,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          left: `${Math.round(anchor.left)}px`,
          right: `${Math.round(field.width - anchor.right)}px`,
          top: `${Math.round(anchor.bottom)}px`,
        };
      case 'left':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.bottom)}px`,
          flexDirection: 'column',
          right: `${Math.round(field.width - anchor.left)}px`,
          top: `${Math.round(anchor.top)}px`,
        };
      case 'left-center':
        return {
          ...common,
          bottom: vSideTop ? `${Math.round(field.height - anchor.top - anchor.bottom)}px` : '0',
          flexDirection: 'column',
          right: `${Math.round(field.width - anchor.left)}px`,
          top: vSideTop ? '0' : `${Math.round(anchor.top - (field.height - anchor.bottom))}px`,
        };
      case 'left-top':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.bottom)}px`,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          right: `${Math.round(field.width - anchor.left)}px`,
          top: `${Math.round(anchor.top)}px`,
        };
      case 'left-bottom':
        return {
          ...common,
          bottom: `${Math.round(field.height - anchor.bottom)}px`,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          right: `${Math.round(field.width - anchor.left)}px`,
          top: `${Math.round(anchor.top)}px`,
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
}
