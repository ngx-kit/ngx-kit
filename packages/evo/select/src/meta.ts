import { ConnectedPosition } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

export interface SelectItem<M = any, V = any, I = any> {
  model: M;
  itemView?: V;
  inputView?: I;
}

export type SelectListStateSourceFn<M> = (input: string) => SelectItem<M>[];

export type SelectListStateAsyncSourceFn<M> = (input: string) => Observable<SelectItem<M>[]>;

export type SelectListStateSource<M> = SelectItem<M>[] | SelectListStateSourceFn<M> | SelectListStateAsyncSourceFn<M>;

export type SelectFilterFn<M> = (input: string, item: SelectItemView<M>) => boolean;

export type SelectFilter<M> =
  undefined
  | 'includes' | 'startsWith' | 'endsWith'
  | SelectFilterFn<M>;

export type SelectSearchFn<M> = (input: string) => SelectItem<M>[] | Observable<SelectItem<M>[]>;

export interface SelectItemView<M> {
  model: M;
  view: any;
  filter?: string;
}

export interface SelectInputView<M> {
  model: M;
  view: any;
}

export interface SelectOptions {
  showItemsOnFocus?: boolean;
  searchDebounce?: number;
  searchOnFocus?: boolean;
  clearable?: boolean;
  itemsPosition: ConnectedPosition;
}

export const selectDefaultOptions: SelectOptions = {
  clearable: true,
  itemsPosition: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
};
