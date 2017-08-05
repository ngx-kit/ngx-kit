import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[kitFormTouch]',
})
export class KitFormTouchDirective implements OnInit {
  @Input() kitFormTouch: any;

  constructor(private formGroupDirective: FormGroupDirective) {
  }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    const form = this.formGroupDirective.form;
    form.markAsTouched();
    for (const i in form.controls) {
      if (form.controls[i]) {
        form.controls[i].markAsTouched();
      }
    }
  }
}
