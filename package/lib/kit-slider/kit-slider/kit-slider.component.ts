import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { KitPointerLineMoveEvent } from '@ngx-kit/ngx-kit';

export const KIT_SLIDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitSliderComponent),
  multi: true,
};

@Component({
  selector: 'kit-slider',
  templateUrl: './kit-slider.component.html',
  styleUrls: ['./kit-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KIT_SLIDER_VALUE_ACCESSOR],
})
export class KitSliderComponent implements ControlValueAccessor, OnInit, OnChanges {
    leftPointerPosition: number;

  @Input() max = 100;

  @Input() min = 0;

  pointerPosition: number;

  /**
   * Range section mode.
   * Model: [number, number]
   */
  @Input() range = false;

  @ViewChild('slider') sliderRef: ElementRef;

  @Input() step = 1;

  private changes$ = new Subject<number | [number, number]>();

  private disabled = false;

  private state: any;

  private touches$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.updatePointers();
  }

  ngOnInit() {
  }

  move(event: KitPointerLineMoveEvent) {
    const pointerState = this.calcPointerState(event);
    if (pointerState !== this.state) {
      if (this.range) {
        const pointer = Math.abs(this.state[0] - pointerState) < Math.abs(this.state[1] - pointerState)
            ? 'left'
            : 'right';
        const newState = pointer === 'left'
            ? [pointerState, this.state[1]]
            : [this.state[0], pointerState];
        this.state = newState;
      } else {
        this.state = pointerState;
      }
      this.updatePointers();
      this.changes$.next(this.state);
    }
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    //  @todo validate range
    this.state = rawValue;
    this.updatePointers();
    this.cdr.markForCheck();
  }

  private calcPointerState(event: KitPointerLineMoveEvent): number {
    const length = this.max - this.min;
    const raw = event.position / event.lineWidth * length;
    return Math.round(raw / this.step) * this.step + this.min;
  }

  private calcPosition(value: number): number {
    const length = this.max - this.min;
    const relPosition = value - this.min;
    return relPosition / length * 100;
  }

  private updatePointers() {
    if (this.range) {
      if (!this.state) {
        this.state = [0, 0];
      }
      this.leftPointerPosition = this.calcPosition(this.state[0]);
      this.pointerPosition = this.calcPosition(this.state[1]);
    } else {
      this.leftPointerPosition = 0;
      this.pointerPosition = this.calcPosition(this.state);
    }
  }
}
