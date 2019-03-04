import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-alert-title',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAlertTitleComponent {
  @ViewChild('content') contentRef: TemplateRef<any>;
}
