import { ChangeDetectionStrategy, Component, } from '@angular/core';

@Component({
  selector: 'ui-modal-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-modal-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalFooterComponent {
}
