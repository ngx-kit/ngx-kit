import { Component } from '@angular/core';
import { UiAutocompleteOptionObject } from '../meta';

@Component({
  templateUrl: './ui-autocomplete-demo.component.html',
})
export class UiAutocompleteDemoComponent {
  value1: string;

  value2: string;

  value3: string;

  value4: string;

  value5: string;

  value6: string;

  options: string[];

  data: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];

  objOptions: UiAutocompleteOptionObject[];

  objData: UiAutocompleteOptionObject[] = [
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
      ? this.data.filter(d => d.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [];
  }

  searchObjOptions(query: string) {
    this.objOptions = query
      ? this.objData.filter(d => d.label.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [];
  }

  searchFocusOptions(query: string) {
    this.options = [...this.data];
  }
}
