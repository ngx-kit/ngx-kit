import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: '<%= dasherize(name) %>-title',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>TitleComponent {
  @ViewChild('content') contentRef: TemplateRef<any>;
}
