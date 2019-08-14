import { SelectItem, SelectItemView } from './meta';
import { BehaviorSubject, Subject } from 'rxjs';

export class SelectState<M> {
  /**
   * Set list of items to pick.
   */
  readonly items = new BehaviorSubject<SelectItem<M>[]>([]);

  /**
   * Prepared view of items list.
   */
  readonly itemsView = new BehaviorSubject<SelectItemView<M>[]>([]);

  /**
   * Is request pending now.
   */
  readonly loading = new BehaviorSubject<boolean>(false);

  readonly model = new BehaviorSubject<M | M[] | undefined>(undefined);

  readonly active = new BehaviorSubject<M | undefined>(undefined);

  readonly selections = new Subject<M | undefined>();
}
