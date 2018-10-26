import { Observable } from 'rxjs';

export interface KitSelectItem<M = any, V = any, I = any> {
  model: M;
  itemView?: V;
  inputView?: I;
}

export type KitSelectListStateSourceFn<M> = (input: string) => KitSelectItem<M>[];

export type KitSelectListStateAsyncSourceFn<M> = (input: string) => Observable<KitSelectItem<M>[]>;

export type KitSelectListStateSource<M> = KitSelectItem<M>[] | KitSelectListStateSourceFn<M> | KitSelectListStateAsyncSourceFn<M>;

export type KitSelectFilterFn<M> = (input: string, item: KitSelectItemView<M>) => boolean;

export type KitSelectFilter<M> =
  undefined
  | 'includes' | 'startsWith' | 'endsWith'
  | KitSelectFilterFn<M>;

export type KitSelectSearchFn<M> = (input: string) => KitSelectItem<M>[] | Observable<KitSelectItem<M>[]>;

export interface KitSelectItemView<M> {
  model: M;
  view: any;
  filter?: string;
}

export interface KitSelectInputView<M> {
  model: M;
  view: any;
}

export interface KitSelectOptions {
  showItemsOnFocus?: boolean;
  searchDebounce?: number;
  searchOnFocus?: boolean;
  clearable?: boolean;
}

export const kitSelectDefaultOptions: KitSelectOptions = {
  clearable: true,
};
