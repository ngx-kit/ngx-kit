import { ComponentRef, Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Structural directive for template repeating.
 *
 *
 * ### Usage
 *
 * ```html
 * <ng-container *kitRepeat="number; let index = index">
 *   Content
 * </ng-container>
 * ```
 *
 *
 * ##№ Example
 *
 * * collection:rating - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-rating),
 * [demo](http://ngx-kit.com/collection/module/ui-rating)
 *
 *
 * @todo do not recreate all views on changes.
 */
@Directive({
  selector: '[kitRepeat]',
})
export class KitRepeatDirective implements OnChanges {
  /**
   * Number of repeats.
   */
  @Input() kitRepeat: number;

  private componentRef: ComponentRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {
  }

  ngOnChanges() {
    if (this.kitRepeat) {
      this.vcr.clear();
      for (let index = 0; index < this.kitRepeat; index++) {
        this.vcr.createEmbeddedView(this.template, {index});
      }
    }
  }
}
