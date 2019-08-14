import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormControlDirective } from '@ngx-kit/evo/form';
import { uuid } from '@ngx-kit/evo/util';

@Component({
  // tslint:disable-next-line
  selector: 'input[type="radio"][uiRadio]',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() id: string;

  @Input('disabled') disabledInput: boolean;

  @ViewChild('checkTemplate', { static: true }) checkTemplate: TemplateRef<any>;

  @HostBinding('attr.id') idBinding = uuid();

  focused = false;

  hasErrors = false;

  disabled = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private elRef: ElementRef,
    @Optional() @Host() private control: FormControlDirective,
    @Optional() @Host() private ngControl: NgControl,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('id' in changes) {
      this.idBinding = this.id;
    }
    if ('disabledInput' in changes) {
      this.disabled = !(this.disabledInput === false);
    }
  }

  ngOnInit() {
    if (this.control) {
      this.idBinding = this.control.id;
      this.control.errorStateChanges.subscribe(errors => {
        this.hasErrors = !errors || errors.length > 0;
        this.cdr.detectChanges();
      });
    }
    if (this.ngControl && this.ngControl.valueChanges) {
      this.ngControl.valueChanges.subscribe(() => {
        this.cdr.detectChanges();
      });
    }
    if (this.ngControl && this.ngControl.statusChanges) {
      this.ngControl.statusChanges.subscribe(() => {
        if (typeof this.disabledInput === 'undefined') {
          this.disabled = !!this.ngControl.disabled;
        }
      });
    }
  }

  ngAfterViewInit() {
    const viewRef = this.vcr.createEmbeddedView(this.checkTemplate);
    // ViewRef extends ChangeDetectionRef, needed for bindings update after projecting.
    viewRef['detectChanges']();
  }

  @HostListener('focus') focusHandler() {
    this.focused = true;
  }

  @HostListener('blur') blurHandler() {
    this.focused = false;
  }

  isChecked(): boolean {
    return this.elRef.nativeElement.checked;
  }
}
