import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild, } from '@angular/core';
import { KitCollapseId, uuid } from '@ngx-kit/ngx-kit';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'kit-accordion-panel,[kitAccordionPanel]',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAccordionPanelComponent implements OnInit {
  @ViewChild('content') contentRef: TemplateRef<any>;

  @Input() id: KitCollapseId;

  @Input() kitAccordionPanel: void;

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
