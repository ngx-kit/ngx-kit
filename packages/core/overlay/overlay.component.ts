import {
  AfterContentInit,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { OverlayContainerPosition, OverlayContainerWidthType } from '../meta/overlay';
import { KitAnchorDirective } from './anchor.directive';
import { KitOverlayService } from './kit-overlay.service';
import { KitOverlayHostComponent } from './overlay-host.component';

@Component({
  selector: 'kit-overlay,[kit-overlay],[kitOverlay]',
  template: '',
})
export class KitOverlayComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  @Input() anchor: KitAnchorDirective | Element;

  @Input() component: any;

  @Output() containerMouseEnter = new EventEmitter<any>();

  @Output() containerMouseLeave = new EventEmitter<any>();

  @Input() kitOverlay: any;

  @Output() outsideClick = new EventEmitter<any>();

  @Input() overlay = false;

  @Input() position: OverlayContainerPosition = 'top';

  @Input() template: any;

  @Input() type: 'center' | 'side' | 'dropdown' = 'center';

  @Input() widthType: OverlayContainerWidthType = 'full';

  private hostRef: ComponentRef<KitOverlayHostComponent>;

  constructor(private overlayService: KitOverlayService) {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.createContainer();
      this.passToContainer();
    }, 1);
  }

  ngOnChanges() {
    if (this.hostRef) {
      this.passToContainer();
    }
  }

  ngOnDestroy() {
    if (this.hostRef) {
      this.hostRef.destroy();
    }
  }

  ngOnInit() {
  }

  private createContainer() {
    this.hostRef = this.overlayService.host<KitOverlayHostComponent>(KitOverlayHostComponent);
    this.hostRef.instance.outsideClick.subscribe(this.outsideClick);
    this.hostRef.instance.containerMouseEnter.subscribe(this.containerMouseEnter);
    this.hostRef.instance.containerMouseLeave.subscribe(this.containerMouseLeave);
  }

  private passToContainer() {
    if (this.hostRef) {
      const instance = this.hostRef.instance;
      // template setup
      if (this.component) {
        if (this.template) {
          throw new Error('kit-host: [component] already passed, now [template] is not allowed! %HELP_URL%');
        }
        instance.component = this.component;
      } else if (this.template) {
        instance.template = this.template;
      } else {
        throw new Error('kit-host: You have to pass [component] or [template]! %HELP_URL%');
      }
      // validate anchor positioning
      if (this.type === 'side' || this.type === 'dropdown') {
        if (!this.anchor) {
          throw new Error('kit-host: For "side" and "dropdown" [type] you should pass [anchor] param! %HELP_URL%');
        }
      }
      // proxy
      instance.anchor = this.anchor instanceof KitAnchorDirective
          ? this.anchor.nativeEl
          : this.anchor;
      instance.overlay = this.overlay;
      instance.type = this.type;
      instance.position = this.position;
      instance.widthType = this.widthType;
      // @todo run CD
    }
  }
}
