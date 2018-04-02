import { Directive, Input, TemplateRef, } from '@angular/core';

/**
 * Structure directive for capturing form-error template.
 */
@Directive({
  selector: '[kitFormError]',
})
export class KitFormErrorDirective {
  @Input() kitFormError: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) {
  }

  get name(): string {
    return this.kitFormError;
  }
}
