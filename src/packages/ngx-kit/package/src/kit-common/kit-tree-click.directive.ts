import { Directive, EventEmitter, HostListener, Input, Optional, Output, SkipSelf } from '@angular/core';

@Directive({
  selector: '[kitTreeClick]',
})
export class KitTreeClickDirective {
  @Input() kitTreeClick: void;

  @Output() treeClick = new EventEmitter<MouseEvent>();

  constructor(@SkipSelf() @Optional() private parent: KitTreeClickDirective) {
  }

  @HostListener('click', ['$event'])
  clickHandler(event: MouseEvent) {
    this.treeClick.emit(event);
    if (this.parent) {
      this.parent.treeClick.emit(event);
    }
  }
}
