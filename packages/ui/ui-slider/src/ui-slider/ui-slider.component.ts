import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isArray } from '@ngx-kit/core';
import { Subject } from 'rxjs';

export const uiSliderValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiSliderComponent),
  multi: true,
};

@Component({
  selector: 'ui-slider',
  templateUrl: './ui-slider.component.html',
  styleUrls: ['./ui-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [uiSliderValueAccessor],
})
export class UiSliderComponent implements ControlValueAccessor, OnChanges {
  @Input() min = 0;

  @Input() max = 100;

  @Input() step = 1;

  /**
   * Range section mode.
   * Model: [number, number]
   */
  @Input() range = false;

  /**
   * Fill space from start to pointer.
   * Always true for range-mode.
   */
  @Input() fill = true;

  @ViewChild('sliderRef') sliderRef: ElementRef;

  mainPointerLeft: number;

  leftPointerLeft: number;

  fillLeft: number;

  fillRight: number;

  private changes = new Subject<number | [number, number]>();

  private disabled = false;

  private state: any;

  private touches = new Subject<void>();

  private rangeLength: number;

  private totalSteps: number;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnChanges() {
    this.rangeLength = this.max - this.min;
    this.totalSteps = this.rangeLength / this.step;
    this.updateView();
  }

  registerOnChange(fn: any) {
    this.changes.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    this.state = rawValue;
    this.updateView();
  }

  handleMove(event: any) {
    const xPosition = this.calcXPosition(event.center.x);
    const width = this.sliderRef.nativeElement.clientWidth;
    const relPosition = xPosition / width;
    const rawValue = this.totalSteps * relPosition * this.step + this.min;
    const value = Math.round(this.totalSteps * relPosition) * this.step + this.min;
    if (this.range) {
      if (isArray(this.state)) {
        const mid = (this.state[0] + this.state[1]) / 2;
        if (rawValue <= mid && value !== this.state[0]) {
          // Move left pointer
          this.updateStateAfterMove([value, this.state[1]]);
        } else if (rawValue >= mid && value !== this.state[1]) {
          // Move right pointer
          this.updateStateAfterMove([this.state[0], value]);
        }
      }
    } else {
      if (this.state !== value) {
        this.updateStateAfterMove(value);
      }
    }
  }

  private calcXPosition(clientX: number) {
    const width = this.sliderRef.nativeElement.clientWidth;
    const sliderRect: ClientRect = this.sliderRef.nativeElement.getBoundingClientRect();
    return clientX <= sliderRect.left
      ? 0
      : clientX >= sliderRect.right
        ? width
        : clientX - sliderRect.left;
  }

  private updateStateAfterMove(state: number | [number, number]) {
    this.state = state;
    this.updateView();
    this.changes.next(this.state);
  }

  private updateView() {
    const width = this.sliderRef.nativeElement.clientWidth;
    if (this.range) {
      if (isArray(this.state)) {
        this.leftPointerLeft = Math.round(((this.state[0] - this.min) / this.rangeLength) * width);
        this.mainPointerLeft = Math.round(((this.state[1] - this.min) / this.rangeLength) * width);
        this.fillLeft = this.leftPointerLeft;
        this.fillRight = width - this.mainPointerLeft;
      }
    } else {
      this.mainPointerLeft = Math.round(((this.state - this.min) / this.rangeLength) * width);
      this.fillLeft = 0;
      this.fillRight = this.fill ? width - this.mainPointerLeft : width;
    }
    this.cdr.detectChanges();
  }
}
