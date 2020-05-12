import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EvoFormControl } from '@ngx-kit/evo/form';

@Component({
  // tslint:disable-next-line
  selector: 'input[liteText],textarea[liteText]',
  template: '',
  styleUrls: ['./lite-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiteTextComponent implements OnInit {
  @Input() autoResize = false;

  @HostBinding('class.-has-errors') hasErrorsClass = false;

  constructor(
    @Optional() private formControl: EvoFormControl,
    @Optional() private ngControl: NgControl,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private platform: Platform,
  ) {
  }

  ngOnInit() {
    // Control error state
    if (this.formControl) {
      this.formControl.control
        .errorStateChanges
        .subscribe(errors => {
          this.hasErrorsClass = !errors || errors.length > 0;
          this.cdr.detectChanges();
        });
    }
    // Update size on model change
    if (this.ngControl && this.ngControl.valueChanges) {
      this.ngControl
        .valueChanges
        .subscribe(() => {
          this.resize();
        });
    }
  }

  @HostListener('keyup') keydownHandler() {
    this.resize();
  }

  @HostListener('input') inputHandler() {
    this.resize();
  }

  private resize() {
    if (this.autoResize && this.platform.isBrowser) {
      const el = this.el.nativeElement;
      // clean up hack
      el.style.height = 'auto';
      // set height
      el.style.height = el.scrollHeight + el.offsetHeight - el.clientHeight + 'px';
    }
  }
}
