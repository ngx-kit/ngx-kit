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

import { KitHostContainerComponent } from './host-container.component';
import { KitAnchorDirective } from './anchor.directive';
import { KitHostService } from '../kit-host.service';

@Component({
  selector: 'kit-host',
  template: '',
})
export class KitHostComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  @Input() component: any;
  @Input() template: any;
  @Input() overlay = false;
  @Input() type: 'center' | 'side' | 'dropdown' = 'center';
  @Input() anchor: KitAnchorDirective;
  @Input() side: 'top' | 'right' | 'bottom' | 'left' = 'top';

  @Output() outsideClick = new EventEmitter<any>();

  private containerRef: ComponentRef<KitHostContainerComponent>;

  constructor(private host: KitHostService) {
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
    if (this.containerRef) {
      this.passToContainer();
    }
  }

  ngOnDestroy() {
    if (this.containerRef) {
      this.containerRef.destroy();
    }
  }

  private createContainer() {
    this.containerRef = this.host.host<KitHostContainerComponent>(KitHostContainerComponent);
    this.containerRef.instance.outsideClick.subscribe(this.outsideClick);
  }

  private passToContainer() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
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
      instance.anchor = this.anchor;
      instance.side = this.side;
      instance.ngOnChanges();
    }
  }

}