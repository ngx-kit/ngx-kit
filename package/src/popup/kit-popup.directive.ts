import {
  AfterContentInit,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { KitOverlayService } from '../overlay/kit-overlay.service';
import { KitCoreOverlayContainerPosition } from '../overlay/meta';
import { KitPopupViewComponent } from './kit-popup-view.component';
import { KitPopupTrigger } from './meta';

@Directive({
  selector: '[kitPopup]',
})
export class KitPopupDirective implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  @Input() position: KitCoreOverlayContainerPosition;

  @Input() trigger: KitPopupTrigger = 'click';

  @Input('kitPopup') view: any;

  viewParams: any;

  private containerRef: ComponentRef<KitPopupViewComponent>;

  private listeners: any[] = [];

  private opened = false;

  constructor(protected overlay: KitOverlayService,
              protected el: ElementRef,
              protected renderer: Renderer2) {
    console.log('el', this.el);
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.containerRef = this.overlay.host<KitPopupViewComponent>(KitPopupViewComponent);
      this.proxyProps();
    }, 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trigger']) {
      this.initTrigger();
    }
  }

  ngOnDestroy() {
    this.removeListeners();
  }

  ngOnInit() {
    console.log('kitPopup', this.view);
    this.initTrigger();
  }

  close() {
    this.opened = false;
    this.proxyProps();
  }

  open() {
    this.opened = true;
    this.proxyProps();
  }

  private initTrigger() {
    this.removeListeners();
    switch (this.trigger) {
      case 'mouseover':
        this.listeners.push(this.renderer.listen(this.el.nativeElement, 'mouseenter', this.open.bind(this)));
        this.listeners.push(this.renderer.listen(this.el.nativeElement, 'mouseleave', this.close.bind(this)));
        break;
      case 'click':
        this.listeners.push(this.renderer.listen(this.el.nativeElement, 'click', this.open.bind(this)));
        break;
      default:
        throw new Error(`Incorrect trigger "${this.trigger}"`);
    }
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.anchor = this.el.nativeElement;
      instance.view = this.view;
      instance.viewParams = this.viewParams;
      instance.position = this.position;
      instance.opened = this.opened;
      instance.ngOnChanges();
    }
  }

  private removeListeners() {
    this.listeners.forEach(l => l());
  }
}
