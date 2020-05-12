import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { EvoStyle } from '@ngx-kit/evo/util';
import { LiteFileComponent } from '../file/lite-file.component';

@Directive({
  selector: '[liteFileHolder]',
  providers: [
    EvoStyle,
  ],
})
export class LiteFileHolderDirective implements OnInit {
  file?: LiteFileComponent;

  constructor(
    private style: EvoStyle,
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
