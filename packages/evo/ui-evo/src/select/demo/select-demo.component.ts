import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IconsRegistry } from '@ngx-kit/evo/icon';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SelectFilterFn, SelectItem, SelectListStateAsyncSourceFn, SelectListStateSourceFn } from '../../../../select/src/meta';

/**
 * @demo
 */
@Component({
  templateUrl: './select-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDemoComponent implements OnInit {
  model = 1;

  modelAutocomplete?: number;

  multiModel: number[] = [];

  simpleItems: SelectItem<any>[] = [
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

  itemsWithItemView: SelectItem<any>[] = [
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

  itemsWithItemViewForSearch: SelectItem<any>[] = [];

  fullViewItems: SelectItem<any>[] = [
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

  filterFn: SelectFilterFn<any> = (input, item) => {
    return !!item.filter && !item.filter.includes(input);
  };

  searchFn: SelectListStateSourceFn<any> = (input: string) => {
    return this.itemsWithItemView.filter(i => !input || i.itemView.toLowerCase().includes(input.toLowerCase()));
  };

  asyncSearchFn: SelectListStateAsyncSourceFn<any> = (input: string) => {
    const items = input
      ? this.itemsWithItemView.filter(i => !input || i.itemView.toLowerCase().includes(input.toLowerCase()))
      : this.itemsWithItemView;
    return from([items]).pipe(delay(1000));
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private icons: IconsRegistry,
  ) {
    this.icons.add({
      name: 'search',
      xml: `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M497.913,497.913c-18.782,18.782-49.225,18.782-68.008,0l-84.862-84.863c-34.889,22.382-76.13,35.717-120.659,35.717  C100.469,448.767,0,348.312,0,224.383S100.469,0,224.384,0c123.931,0,224.384,100.452,224.384,224.383  c0,44.514-13.352,85.771-35.718,120.676l84.863,84.863C516.695,448.704,516.695,479.131,497.913,497.913z M224.384,64.109  c-88.511,0-160.274,71.747-160.274,160.273c0,88.526,71.764,160.274,160.274,160.274c88.525,0,160.273-71.748,160.273-160.274  C384.657,135.856,312.909,64.109,224.384,64.109z"/></svg>`,
    });
  }

  ngOnInit() {
  }
}
