import { Directive, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { KitPlatformService } from '@ngx-kit/core';

@Directive({
  selector: '[appScrollUp]',
})
export class ScrollUpDirective implements OnInit {
  constructor(
    private router: Router,
    private platform: KitPlatformService,
    private el: ElementRef,
  ) {
  }

  ngOnInit() {
    if (this.platform.isBrowser()) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.el.nativeElement.scrollTo(0, 0);
        }
      });
    }
  }
}
