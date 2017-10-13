import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { <%= classify(name) %>Option } from '../meta';

export const <%= camelize(name) %>ValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => <%= classify(name) %>Component),
  multi: true,
};

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [<%= camelize(name) %>ValueAccessor],
  animations: [
    trigger('popup', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
        }),
        animate('100ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate('100ms', style({
          opacity: 0,
          transform: 'translateY(-5px)',
        })),
      ]),
    ]),
  ],
})
export class <%= classify(name) %>Component implements OnInit, ControlValueAccessor {
  displayPopup = false;

  @Input() options: <%= classify(name) %>Option[] = [];

  viewState: any;

  private changes$ = new Subject<any>();

  private disabled = false;

  private state: any;

  private touches$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef,
              private el: ElementRef) {
  }

  get nativeEl() {
    return this.el.nativeElement;
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickHandler() {
    this.displayPopup = !this.displayPopup;
  }

  closePopup() {
    this.displayPopup = false;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  select(value: any) {
    this.state = value;
    this.changes$.next(this.state);
    this.updateViewState();
    this.displayPopup = false;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    this.state = rawValue;
    this.updateViewState();
    this.cdr.markForCheck();
  }

  private updateViewState() {
    this.viewState = this.options.find(o => o.value === this.state);
  }
}
