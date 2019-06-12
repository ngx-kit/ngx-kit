import { ConnectedPosition } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

export interface UiSelectItem<M = any, V = any, I = any> {
  model: M;
  itemView?: V;
  inputView?: I;
}

export type UiSelectListStateSourceFn<M> = (input: string) => UiSelectItem<M>[];

export type UiSelectListStateAsyncSourceFn<M> = (input: string) => Observable<UiSelectItem<M>[]>;

export type UiSelectListStateSource<M> = UiSelectItem<M>[] | UiSelectListStateSourceFn<M> | UiSelectListStateAsyncSourceFn<M>;

export type UiSelectFilterFn<M> = (input: string, item: UiSelectItemView<M>) => boolean;

export type UiSelectFilter<M> =
  undefined
  | 'includes' | 'startsWith' | 'endsWith'
  | UiSelectFilterFn<M>;

export type UiSelectSearchFn<M> = (input: string) => UiSelectItem<M>[] | Observable<UiSelectItem<M>[]>;

export interface UiSelectItemView<M> {
  model: M;
  view: any;
  filter?: string;
}

export interface UiSelectInputView<M> {
  model: M;
  view: any;
}

export interface UiSelectOptions {
  showItemsOnFocus?: boolean;
  searchDebounce?: number;
  searchOnFocus?: boolean;
  clearable?: boolean;
  itemsPosition: ConnectedPosition;
}

export const uiSelectDefaultOptions: UiSelectOptions = {
  clearable: true,
  itemsPosition: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
};
