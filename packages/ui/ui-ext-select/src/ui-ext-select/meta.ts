import { Observable } from 'rxjs';

export interface UiExtSelectItem<M = any, V = any, I = any> {
  model: M;
  itemView?: V;
  inputView?: I;
}

export type UiExtSelectListStateSourceFn<M> = (input: string) => UiExtSelectItem<M>[];

export type UiExtSelectListStateAsyncSourceFn<M> = (input: string) => Observable<UiExtSelectItem<M>[]>;

export type UiExtSelectListStateSource<M> = UiExtSelectItem<M>[] | UiExtSelectListStateSourceFn<M> | UiExtSelectListStateAsyncSourceFn<M>;

export type UiExtSelectFilterFn<M> = (input: string, item: UiExtSelectItemView<M>) => boolean;

export type UiExtSelectFilter<M> =
  undefined
  | 'includes' | 'startsWith' | 'endsWith'
  | UiExtSelectFilterFn<M>;

export type UiExtSelectSearchFn<M> = (input: string) => UiExtSelectItem<M>[] | Observable<UiExtSelectItem<M>[]>;

export interface UiExtSelectItemView<M> {
  model: M;
  view: any;
  filter?: string;
}

export interface UiExtSelectInputView<M> {
  model: M;
  view: any;
}

export interface UiExtSelectOptions {
  showItemsOnFocus?: boolean;
  searchDebounce?: number;
  searchOnFocus?: boolean;
  clearable?: boolean;
}

export const uiExtSelectDefaultOptions: UiExtSelectOptions = {
  clearable: true,
};
