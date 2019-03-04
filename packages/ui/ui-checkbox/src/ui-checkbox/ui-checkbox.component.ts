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
import { isUndefined, KitNgControlDirective, uuid } from '@ngx-kit/core';

@Component({
  // tslint:disable-next-line
  selector: 'input[type="checkbox"][uiCheckbox]',
  templateUrl: './ui-checkbox.component.html',
  styleUrls: ['./ui-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCheckboxComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() uiText: void;

  @Input() id: string;

  @Input('disabled') disabledInput: boolean;

  @ViewChild('checkTemplate') checkTemplate: TemplateRef<any>;

  @HostBinding('attr.id') idBinding = uuid();

  focused = false;

  hasErrors = false;

  disabled = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private elRef: ElementRef,
    @Optional() @Host() private control: KitNgControlDirective,
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
        if (isUndefined(this.disabledInput)) {
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
