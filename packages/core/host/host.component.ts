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
  @Input() position: 'center' | 'anchor' = 'center';
  @Input() anchor: KitAnchorDirective;

  private containerRef: ComponentRef<KitHostContainerComponent>;

  constructor(private host: KitHostService) {
  }

  ngOnInit() {
    this.containerRef = this.host.host<KitHostContainerComponent>(KitHostContainerComponent);
    const instance = this.containerRef.instance;
    // template setup
    if (this.component) {
      if (this.template) {
        throw new Error('[kit-host]: Component already passed, template is not allowed! %HELP_URL%');
      }
      instance.component = this.component;
    } else if (this.template) {
      instance.template = this.template;
    } else {
      throw new Error('[kit-host]: You have to pass component or template! %HELP_URL%');
    }
    // validate anchor positioning
    if (this.position === 'anchor') {
      if (!this.anchor) {
        throw new Error('[kit-host]: For anchor positioning you should pass anchor param! %HELP_URL%');
      }
    }
    // proxy
    instance.position = this.position;
    instance.anchor = this.anchor;
    instance.ngOnChanges();
  }

}
