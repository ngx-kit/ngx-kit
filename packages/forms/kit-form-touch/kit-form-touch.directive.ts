import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[kit-form-touch]',
})
export class KitFormTouchComponent implements OnInit {

  @Input() kitFormTouch: any;

  @HostListener('click') click() {
    console.log('click kft');
    const form = this.formGroupDirective.form;
    form.markAsTouched();
    for (const i in form.controls) {
      form.controls[i].markAsTouched();
    }
  }

  constructor(private formGroupDirective: FormGroupDirective) {
  }

  ngOnInit() {
  }

}
