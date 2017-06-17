import { Component, ComponentRef, Input, OnInit } from '@angular/core';

import { KitHostService } from '../kit-host.service';
import { KitHostContainerComponent } from './host-container.component';
import { KitAnchorDirective } from './anchor.directive';

@Component({
  selector: 'kit-host',
  template: '',
})
export class KitHostComponent implements OnInit {

  @Input() component: any;
  @Input() template: any;
  @Input() overlay = false;
  @Input() type: 'center' | 'side' | 'dropdown' = 'center';
  @Input() anchor: KitAnchorDirective;
  @Input() side: 'top' | 'right' | 'bottom' | 'left' = 'top';

  private containerRef: ComponentRef<KitHostContainerComponent>;

  constructor(private host: KitHostService) {
  }

  ngOnInit() {
    this.containerRef = this.host.host<KitHostContainerComponent>(KitHostContainerComponent);
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
