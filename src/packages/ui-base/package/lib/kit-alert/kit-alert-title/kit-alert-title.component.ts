import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'kit-alert-title',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAlertTitleComponent {
  @ViewChild('content') contentRef: TemplateRef<any>;

  @Input() kitAlertTitle: null;
}
