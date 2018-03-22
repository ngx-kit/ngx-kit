import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiAutocompleteOptionObject } from '../../../lib/ui-autocomplete/meta';

@Component({
  selector: 'demo-autocomplete-option-object',
  templateUrl: './demo-autocomplete-option-object.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAutocompleteOptionObjectComponent {
  value: string;

  options: UiAutocompleteOptionObject[];

  data: UiAutocompleteOptionObject[] = [
    {value: '2018/01', label: 'January'},
    {value: '2018/02', label: 'February'},
    {value: '2018/03', label: 'March'},
    {value: '2018/04', label: 'April'},
    {value: '2018/05', label: 'May'},
    {value: '2018/06', label: 'June'},
    {value: '2018/07', label: 'July'},
    {value: '2018/08', label: 'August'},
    {value: '2018/09', label: 'September'},
    {value: '2018/10', label: 'October'},
    {value: '2018/11', label: 'November'},
    {value: '2018/12', label: 'December'},
  ];

  searchOptions(query: string) {
    this.options = query
      ? this.data.filter(d => d.label.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [];
  }
}
