import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'select[<%= camelize(name) %>]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component {
  @Input() <%= camelize(name) %>: void;
}
