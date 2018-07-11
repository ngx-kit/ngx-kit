import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { KitHammerProvider, KitScrollService, KitScrollState } from '@ngx-kit/core';

@Component({
  selector: 'ui-scroll',
  templateUrl: './ui-scroll.component.html',
  styleUrls: ['./ui-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitScrollService,
  ],
})
export class UiScrollComponent implements AfterContentInit {
  state: KitScrollState;

  hover = false;

  @ViewChild('vBar') vBar: ElementRef;

  @ViewChild('vBarWrapper') vBarWrapper: ElementRef;

  @ViewChild('hBar') hBar: ElementRef;

  @ViewChild('hBarWrapper') hBarWrapper: ElementRef;

  @ViewChild('vWrapper') vWrapper: ElementRef;

  @ViewChild('hWrapper') hWrapper: ElementRef;

  constructor(
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private hammer: KitHammerProvider<any>,
    private scroll: KitScrollService,
  ) {
  }

  ngAfterContentInit() {
    this.scroll.registerRefs({
      vBar: this.vBar.nativeElement,
      vBarWrapper: this.vBarWrapper.nativeElement,
      vWrapper: this.vWrapper.nativeElement,
      hBar: this.hBar.nativeElement,
      hBarWrapper: this.hBarWrapper.nativeElement,
      hWrapper: this.hWrapper.nativeElement,
    });
    this.scroll.stateChanges.subscribe(state => {
      this.state = state;
      this.cdr.detectChanges();
    });
  }

  @HostListener('mouseenter') mouseenterHandler() {
    this.hover = true;
    this.scroll.update();
  }

  @HostListener('mouseleave') mouseleaveHandler() {
    this.hover = false;
  }

  updateVBar() {
    this.scroll.updateVBar();
  }

  updateHBar() {
    this.scroll.updateHBar();
  }
}
