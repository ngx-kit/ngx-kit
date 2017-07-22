import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentModal } from '../core/meta/tokens';

@Component({
  selector: 'kit-modal,[kit-modal],[kitModal]',
  template: `
    <kit-overlay [template]="modalRef"
                 [type]="'center'"
                 [overlay]="true"
                 [opened]="opened"
                 (outsideClick)="close()"></kit-overlay>
    <ng-template #modalRef>
      <div styler="modal">
        <div styler="header">
          <ng-content select="[header]"></ng-content>
        </div>
        <div styler="content">
          <ng-content select="[content]"></ng-content>
        </div>
        <div styler="footer">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </ng-template>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitModalComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitModal: any;

  @Input() opened = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentModal) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  close() {
    this.opened = false;
  }

  open() {
    this.opened = true;
  }
}
