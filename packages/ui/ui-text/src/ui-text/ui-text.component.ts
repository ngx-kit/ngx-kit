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
import { KitFormFieldService, KitPlatformService } from '@ngx-kit/core';

@Component({
  // tslint:disable-next-line
  selector: 'input[uiText],textarea[uiText]',
  template: '',
  styleUrls: ['./ui-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextComponent implements OnInit {
  @Input() uiText: void;

  @Input() autoResize = false;

  @HostBinding('class.-has-errors') hasErrorsClass = false;

  constructor(
    @Optional() private formFieldService: KitFormFieldService,
    @Optional() private ngControl: NgControl,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private platform: KitPlatformService,
  ) {
  }

  ngOnInit() {
    // Control error state
    if (this.formFieldService) {
      this.formFieldService.control
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
    if (this.autoResize && this.platform.isBrowser()) {
      const el = this.el.nativeElement;
      // clean up hack
      el.style.height = 'auto';
      // set height
      el.style.height = el.scrollHeight + el.offsetHeight - el.clientHeight + 'px';
    }
  }
}
