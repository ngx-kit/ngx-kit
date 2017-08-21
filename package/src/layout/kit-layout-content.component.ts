import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentLayoutContent } from '../core/meta/tokens';

@Component({
  selector: 'kit-layout-content,[kitLayoutContent]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutContentComponent implements OnInit {
  @Input() kitLayoutContent: any;

  @Input() scrollTopOnRouting = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutContent) private style: KitComponentStyle,
              private router: Router,
              private el: ElementRef) {
    this.styler.classPrefix = 'kit-layout-content';
    this.styler.register(this.style);
  }

  ngOnInit() {
    if (this.scrollTopOnRouting) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.el.nativeElement.scrollTop = 0;
        }
      });
    }
  }
}
