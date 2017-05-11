import {
  Component,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService, KitHostService } from '@ngx-kit/core';

import { KitTooltipService } from '../kit-tooltip.service';
import { KitTooltipViewComponent } from '../kit-tooltip-view/kit-tooltip-view.component';
import { KitTooltipPosition } from '../interfaces';

@Directive({
  selector: '[kit-tooltip]',
})
export class KitTooltipDirective implements OnInit {

  private viewRef: ComponentRef<KitTooltipViewComponent>;
  private _text: string;

  @Input('kit-tooltip')
  set text(content: string) {
    this._text = content;
  }

  @Input() position: KitTooltipPosition = 'top';

  @HostBinding('class') hostClass: string;

  @HostListener('mouseenter') mouseenter() {
    this.show();
  }

  @HostListener('mouseleave') mouseleave() {
    this.hide();
  }

  @HostListener('click') click() {
    alert(this._text);
  }

  constructor(private core: KitCoreService,
              private service: KitTooltipService,
              private host: KitHostService,
              private el: ElementRef) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.host.base,
    );
  }

  private compileStyles() {
  }

  private show() {
    this.viewRef = this.host.host<KitTooltipViewComponent>(KitTooltipViewComponent);
    console.log('el', this.el.nativeElement.getBoundingClientRect());
    this.viewRef.instance.hostRect = this.el.nativeElement.getBoundingClientRect();
    this.viewRef.instance.text = this._text;
  }

  private hide() {
    this.viewRef.destroy();
  }

}
