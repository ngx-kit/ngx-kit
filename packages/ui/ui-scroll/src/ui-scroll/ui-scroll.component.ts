import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { KitHammerProvider } from '@ngx-kit/core';
import { UiScrollState } from './meta';
import { UiScrollService } from './ui-scroll.service';

@Component({
  selector: 'ui-scroll',
  templateUrl: './ui-scroll.component.html',
  styleUrls: ['./ui-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    UiScrollService,
  ],
})
export class UiScrollComponent implements AfterContentInit {
  state: UiScrollState;

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
    private scroll: UiScrollService,
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
