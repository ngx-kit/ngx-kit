import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  UiExtSelectFilterFn,
  UiExtSelectItem,
  UiExtSelectListStateAsyncSourceFn,
  UiExtSelectListStateSourceFn,
} from '../ui-ext-select/meta';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-ext-select-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiExtSelectDemoComponent implements OnInit {
  model = 1;

  modelAutocomplete?: number;

  multiModel: number[] = [];

  simpleItems: UiExtSelectItem<any>[] = [
    {model: 1},
    {model: 2},
    {model: 3},
    {model: 4},
    {model: 5},
    {model: 6},
    {model: 7},
    {model: 8},
    {model: 9},
    {model: 10},
    {model: 11},
    {model: 12},
  ];

  itemsWithItemView: UiExtSelectItem<any>[] = [
    {
      model: 1,
      itemView: 'January',
    },
    {
      model: 2,
      itemView: 'February',
    },
    {
      model: 3,
      itemView: 'March',
    },
    {
      model: 4,
      itemView: 'April',
    },
    {
      model: 5,
      itemView: 'May',
    },
    {
      model: 6,
      itemView: 'June',
    },
    {
      model: 7,
      itemView: 'July',
    },
    {
      model: 8,
      itemView: 'August',
    },
    {
      model: 9,
      itemView: 'September',
    },
    {
      model: 10,
      itemView: 'October',
    },
    {
      model: 11,
      itemView: 'November',
    },
    {
      model: 12,
      itemView: 'December',
    },
  ];

  itemsWithItemViewForSearch: UiExtSelectItem<any>[] = [];

  fullViewItems: UiExtSelectItem<any>[] = [
    {
      model: 1,
      itemView: 'January',
      inputView: 'Jan',
    },
    {
      model: 2,
      itemView: 'February',
      inputView: 'Feb',
    },
    {
      model: 3,
      itemView: 'March',
      inputView: 'Mar',
    },
    {
      model: 4,
      itemView: 'April',
      inputView: 'Apr',
    },
  ];

  filterFn: UiExtSelectFilterFn<any> = (input, item) => {
    return !!item.filter && !item.filter.includes(input);
  };

  searchFn: UiExtSelectListStateSourceFn<any> = (input: string) => {
    return this.itemsWithItemView.filter(i => !input || i.itemView.toLowerCase().includes(input.toLowerCase()));
  };

  asyncSearchFn: UiExtSelectListStateAsyncSourceFn<any> = (input: string) => {
    const items = input
      ? this.itemsWithItemView.filter(i => !input || i.itemView.toLowerCase().includes(input.toLowerCase()))
      : this.itemsWithItemView;
    return from([items]).pipe(delay(1000));
  };

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }
}
