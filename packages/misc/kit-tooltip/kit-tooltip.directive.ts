import {
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

import { KitHostService } from '@ngx-kit/core';

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

  constructor(private host: KitHostService,
              private el: ElementRef) {
  }

  ngOnInit() {
  }

  private show() {
    this.viewRef = this.host.host<KitTooltipViewComponent>(KitTooltipViewComponent);
    this.viewRef.instance.hostRect = this.el.nativeElement.getBoundingClientRect();
    this.viewRef.instance.text = this._text;
  }

  private hide() {
    this.viewRef.destroy();
  }

}
