import { Directive, OnInit } from '@angular/core';
import { KitFocusManagerService } from '../kit-focus-manager.service';

@Directive({
  selector: '[kitFocusTrap]',
  providers: [
    KitFocusManagerService,
  ],
})
export class KitFocusTrapDirective implements OnInit {
  constructor(private service: KitFocusManagerService) {
    this.service.autoCapture = true;
  }

  ngOnInit() {
    this.service.init();
  }
}
