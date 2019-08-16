import { ConnectedPosition } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

export interface EvoSelectItem<M = any, V = any, I = any> {
  model: M;
  itemView?: V;
  inputView?: I;
}

export type EvoSelectListStateSourceFn<M> = (input: string) => EvoSelectItem<M>[];

export type EvoSelectListStateAsyncSourceFn<M> = (input: string) => Observable<EvoSelectItem<M>[]>;

export type EvoSelectListStateSource<M> = EvoSelectItem<M>[] | EvoSelectListStateSourceFn<M> | EvoSelectListStateAsyncSourceFn<M>;

export type EvoSelectFilterFn<M> = (input: string, item: EvoSelectItemView<M>) => boolean;

export type EvoSelectFilter<M> =
  undefined
  | 'includes' | 'startsWith' | 'endsWith'
  | EvoSelectFilterFn<M>;

export type EvoSelectSearchFn<M> = (input: string) => EvoSelectItem<M>[] | Observable<EvoSelectItem<M>[]>;

export interface EvoSelectItemView<M> {
  model: M;
  view: any;
  filter?: string;
}

export interface EvoSelectInputView<M> {
  model: M;
  view: any;
}

export interface EvoSelectOptions {
  showItemsOnFocus?: boolean;
  searchDebounce?: number;
  searchOnFocus?: boolean;
  clearable?: boolean;
  itemsPosition: ConnectedPosition;
}

export const evoSelectDefaultOptions: EvoSelectOptions = {
  clearable: true,
  itemsPosition: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
};
