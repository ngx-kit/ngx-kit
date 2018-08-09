import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { KitStyleService } from '@ngx-kit/core';
import { UiFileComponent } from '../ui-file/ui-file.component';

@Directive({
  selector: '[uiFileHolder]',
  providers: [
    KitStyleService,
  ],
})
export class UiFileHolderDirective implements OnInit {
  @Input() uiFileWrapper: void;

  file?: UiFileComponent;

  constructor(
    private style: KitStyleService,
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
