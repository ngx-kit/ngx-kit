import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-autocomplete-option-template',
  templateUrl: './demo-autocomplete-option-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAutocompleteOptionTemplateComponent {
  value: string;

  options: string[];

  data: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];

  searchOptions(query: string) {
    this.options = query
      ? this.data.filter(d => d.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [];
  }
}
