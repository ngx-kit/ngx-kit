import { Directive, TemplateRef, } from '@angular/core';

/**
 * Structural directive for template projecting.
 */
@Directive({
  selector: '[kitRef]',
  exportAs: 'ref',
})
export class KitRefDirective {
  constructor(
    private _template: TemplateRef<any>,
  ) {
  }

  get template(): TemplateRef<any> {
    return this._template;
  }
}
