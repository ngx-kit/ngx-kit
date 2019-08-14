import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { Style } from '@ngx-kit/evo/util';
import { FileComponent } from './file.component';

@Directive({
  selector: '[uiFileHolder]',
  providers: [
    Style,
  ],
})
export class FileHolderDirective implements OnInit {
  @Input() uiFileWrapper: void;

  file?: FileComponent;

  constructor(
    private style: Style,
  ) {
  }

  ngOnInit() {
    this.style.style = {
      display: 'inline-block',
      overflow: 'hidden',
      position: 'relative',
    };
  }

  @HostListener('click', ['$event']) clickHandler(event: any) {
    if (this.file) {
      this.file.emitClick();
    }
  }
}
