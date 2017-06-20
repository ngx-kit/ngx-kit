import {
  AfterContentInit,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { KitOverlayHostComponent } from './overlay-host.component';
import { KitAnchorDirective } from './anchor.directive';
import { KitOverlayService } from './kit-overlay.service';
import { OverlayContainerPosition } from '../meta/overlay';

@Component({
  selector: 'kit-overlay',
  template: '',
})
export class KitOverlayComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  @Input() component: any;
  @Input() template: any;
  @Input() overlay = false;
  @Input() type: 'center' | 'side' | 'dropdown' = 'center';
  @Input() anchor: KitAnchorDirective;
  @Input() position: OverlayContainerPosition = 'top';

  @Output() outsideClick = new EventEmitter<any>();

  private hostRef: ComponentRef<KitOverlayHostComponent>;

  constructor(private overlayService: KitOverlayService) {
  }

  ngOnInit() {
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

  private createContainer() {
    this.hostRef = this.overlayService.host<KitOverlayHostComponent>(KitOverlayHostComponent);
    this.hostRef.instance.outsideClick.subscribe(this.outsideClick);
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
      instance.type = this.type;
      instance.anchor = this.anchor.nativeEl;
      instance.position = this.position;
      // @todo run CD
    }
  }

}
