import { Directive, Input, TemplateRef } from '@angular/core';

/**
 * Structural directive for template projecting.
 */
@Directive({
  selector: '[kitRef]',
  exportAs: 'ref',
})
export class KitRefDirective<T = any> {
  @Input() kitRef: T;

  constructor(
    private _template: TemplateRef<any>,
  ) {
  }

  get template(): TemplateRef<any> {
    return this._template;
  }

  get param(): T {
    return this.kitRef;
  }
}
