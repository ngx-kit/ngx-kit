import { Directive, Input, TemplateRef, } from '@angular/core';

/**
 * Structure directive for capturing form-error template.
 */
@Directive({
  selector: '[evoFormError]',
})
export class FormErrorDirective {
  @Input() evoFormError: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) {
  }

  get name(): string {
    return this.evoFormError;
  }
}
