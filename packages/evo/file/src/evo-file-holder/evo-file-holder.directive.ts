import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { EvoStyle } from '@ngx-kit/evo/style';
import { EvoFileComponent } from '../evo-file/evo-file.component';

@Directive({
  selector: '[evoFileHolder]',
  providers: [
    EvoStyle,
  ],
})
export class EvoFileHolderDirective implements OnInit {
  @Input() uiFileWrapper: void;

  file?: EvoFileComponent;

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
