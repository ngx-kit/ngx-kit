import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Inject,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { kitComponentLayout, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitLayoutSideComponent } from './kit-layout-side.component';

@Component({
  selector: 'kit-layout,[kit-layout],[kitLayout]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutComponent implements OnInit, AfterContentInit {
  @Input() kitLayout: any;

  @ContentChildren(KitLayoutSideComponent, {descendants: false}) sides: QueryList<KitLayoutSideComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayout) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set fullscreen(fullscreen: boolean) {
    this.styler.host.applyState({fullscreen});
  }

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  };

  ngAfterContentInit() {
    if (this.sides.length > 0) {
      console.log('side', this.sides);
      this.styler.host.applyState({hasSide: true});
    }
  }

  ngOnInit() {
  }
}
