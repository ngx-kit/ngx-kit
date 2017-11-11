import { Directive, EventEmitter, HostListener, Input, Optional, Output, SkipSelf } from '@angular/core';

/**
 * Unstable!
 */
@Directive({
  selector: '[kitTreeClick]',
})
export class KitTreeClickDirective {
  @Input() kitTreeClick: void;

  @Output() treeClick = new EventEmitter<MouseEvent>();

  constructor(@SkipSelf() @Optional() private parent: KitTreeClickDirective) {
  }

  @HostListener('click', ['$event'])
  clickHandler(event: any) {
    this.treeClick.emit(event);
    if (this.parent) {
      this.parent.treeClick.emit(event);
    }
  }
}
