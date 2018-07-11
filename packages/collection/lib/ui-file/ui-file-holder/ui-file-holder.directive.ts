import { Directive, Input, OnInit } from '@angular/core';
import { KitStyleService } from '@ngx-kit/core';

@Directive({
  selector: '[uiFileHolder]',
  providers: [
    KitStyleService,
  ],
})
export class UiFileHolderDirective implements OnInit {
  @Input() uiFileWrapper: void;

  constructor(private style: KitStyleService) {
  }

  ngOnInit() {
    this.style.style = {
      overflow: 'hidden',
      position: 'relative',
    };
  }
}
