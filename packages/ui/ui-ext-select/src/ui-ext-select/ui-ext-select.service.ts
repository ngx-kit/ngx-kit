import { ChangeDetectorRef, ElementRef, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, fromEvent, merge, Observable, Subject, timer } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, filter, map, mapTo, switchMap, takeUntil, tap } from 'rxjs/operators';
import { KitFocusListenerService } from '../../../../core/src/kit-focus-listener/kit-focus-listener.service';
import { KitPlatformService } from '../../../../core/src/kit-platform/kit-platform.service';
import { isArray } from '../../../../core/src/util/is-array';
import { isDefined } from '../../../../core/src/util/is-defined';
import { isFunction } from '../../../../core/src/util/is-function';
import { isNotUndefined } from '../../../../core/src/util/is-undefined';
import {
  uiExtSelectDefaultOptions,
  UiExtSelectFilter,
  UiExtSelectInputView,
  UiExtSelectItem,
  UiExtSelectItemView,
  UiExtSelectOptions,
  UiExtSelectSearchFn,
} from './meta';

/**
 * Service for handling state of extended selector.
 * Should be provided on a component.
 *
 *
 * ### Example
 *
 * * collection:ext-select - [demo](https://ngx-kit.com/collection/module/ui-ext-select)
 */
@Injectable()
export class UiExtSelectService<M> implements OnDestroy {
  /**
   * Is control disabled.
   */
  disabled = false;

  /**
   * @input
   */
  private readonly _items = new BehaviorSubject<UiExtSelectItem<M>[]>([]);

  /**
   * @input
   */
  private _searchFn?: UiExtSelectSearchFn<M>;

  /**
   * @input
   */
  private readonly _filter = new BehaviorSubject<UiExtSelectFilter<M> | undefined>(undefined);

  /**
   * @input
   */
  private readonly _options = new BehaviorSubject<UiExtSelectOptions>(uiExtSelectDefaultOptions);

  /**
   * @input
   */
  private _multiple?: boolean;

  private readonly searchItems = new BehaviorSubject<UiExtSelectItem<M>[]>([]);

  private selectRef: ElementRef;

  private readonly _inputView = new BehaviorSubject<UiExtSelectInputView<M>[] | undefined>(undefined);

  private readonly _itemsView = new BehaviorSubject<UiExtSelectItemView<M>[]>([]);

  private readonly _focused = new BehaviorSubject<boolean>(false);

  private readonly _itemsDisplay = new BehaviorSubject<boolean>(false);

  private readonly _model = new BehaviorSubject<M | M[] | undefined>(undefined);

  private readonly userInputs = new Subject<string>();

  private readonly _input = new BehaviorSubject<string>('');

  private readonly selections = new Subject<M | undefined>();

  private readonly removals = new Subject<M | undefined>();

  private readonly _loading = new BehaviorSubject<boolean>(false);

  private readonly _active = new BehaviorSubject<M | undefined>(undefined);

  private readonly mouseDowns = new Subject<any>();

  private readonly keyDowns = new Subject<{event: KeyboardEvent, handled: boolean}>();

  private destroy = new Subject<void>();

  /**
   * ValueAccessor changes.
   */
  private _vaChanges = new Subject<M | M[]>();

  private _vaTouches = new Subject<void>();

  private _viewChanges = new Subject<void>();

  constructor(
    private elRef: ElementRef,
    private platform: KitPlatformService,
    private cdr: ChangeDetectorRef,
    private focusListener: KitFocusListenerService,
  ) {
    this.handleKeyboard();
    this.handleItemsDisplay();
    this.handleInput();
    this.handleSearch();
    this.handleInputView();
    this.handleItemsView();
    this.handleModel();
    this.handleActive();
    this.handleSelect();
    this.handleRemoval();
    this.handleChangeDetection();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  /**
   * Is options should be displayed.
   */
  get itemsDisplay() {
    return this._itemsDisplay.value;
  }

  set itemsDisplay(itemsDisplay: boolean) {
    this._itemsDisplay.next(itemsDisplay);
  }

  /**
   * Observable with `itemsDisplay`.
   */
  get itemsDisplayChanges() {
    return this._itemsDisplay.asObservable();
  }

  /**
   * List of options to display.
   */
  get options() {
    return this._options.value;
  }

  /**
   * Observable with `options`.
   */
  get optionsChanges() {
    return this._options.asObservable();
  }

  /**
   * Observable that emits when view should be updated.
   */
  get viewChanges() {
    return this._viewChanges.asObservable();
  }

  get items() {
    return this._items.value;
  }

  /**
   * Set list of items to pick.
   */
  set items(items: UiExtSelectItem<M>[]) {
    this._items.next(items);
  }

  /**
   * Emits when items array changed by item selection.
   */
  get itemsChanges() {
    return this._items.asObservable();
  }

  /**
   * Search function will be used instead of filter. The function should return list of items to pick.
   *
   * After pick, in addition to `ngModel` update, picked item will be merged into `[items]` array, updated array will be emitted via
   * `(itemsChange)` output. So you can use two-way binding here: `<... [(items)]="selectItems">`.
   *
   * Fits to async search or autocomplete.
   *
   * Enables autocomplete mode.
   */
  set searchFn(searchFn: UiExtSelectSearchFn<M> | undefined) {
    this._searchFn = searchFn;
  }

  /**
   * True if items received from `searchFn` instead of `items`.
   */
  get isAutocomplete() {
    return !!this._searchFn;
  }

  get model() {
    return this._model.value;
  }

  /**
   * Set current value of the control.
   */
  set model(model: M | M[] | undefined) {
    this._model.next(model);
  }

  /**
   * Observable with `model`.
   */
  get modelChanges() {
    return this._model.asObservable();
  }

  /**
   * View displayed in input section.
   *
   * @deprecated Use `.inputViews` instead.
   *
   * @todo Remove in the next major release.
   */
  get inputView(): UiExtSelectInputView<M> | UiExtSelectInputView<M>[] | undefined {
    return this._inputView.value as any;
  }

  /**
   * View displayed in input section.
   * Always returns an array. For non-multiple select use the first item: `inputViews[0]`.
   */
  get inputViews(): UiExtSelectInputView<M>[] {
    return this._inputView.value ? this._inputView.value : [];
  }

  /**
   * Observable with `inputView`.
   */
  get inputViewChanges() {
    return this._inputView.asObservable();
  }

  /**
   * Prepared view of items list.
   */
  get itemsView() {
    return this._itemsView.value;
  }

  /**
   * Observable with `itemsView`.
   */
  get itemsViewChanges() {
    return this._itemsView.asObservable();
  }

  get filter() {
    return this._filter.value;
  }

  /**
   * Set filter to search through the current list of `[items]`.
   */
  set filter(f: UiExtSelectFilter<M> | undefined) {
    this._filter.next(f);
  }

  /**
   * Observable with `filter`.
   */
  get filterChanges() {
    return this._filter.asObservable();
  }

  get input() {
    return this._input.value;
  }

  /**
   * Set value entered by user.
   */
  set input(input: string) {
    this._input.next(input);
  }

  /**
   * Observable with `input`.
   */
  get inputChanges() {
    return this._input.asObservable();
  }

  /**
   * Indicate that select should has input for filtering or search.
   */
  get searchable() {
    return this._filter.value || this._searchFn;
  }

  /**
   * Is request pending now.
   */
  get loading() {
    return this._loading.value;
  }

  /**
   * Observable with `loading`.
   */
  get loadingChanges() {
    return this._loading.asObservable();
  }

  /**
   * Is select works in multiple mode.
   */
  get multiple() {
    return this._multiple;
  }

  /**
   * Enables multiple select.
   */
  set multiple(multiple: boolean | undefined) {
    this._multiple = multiple;
  }

  /**
   * Check model is clearable.
   */
  get isClearable() {
    return !!this.options.clearable && (
      (this.multiple && isArray(this.model) && this.model.length > 0)
      || (!this.multiple && this.model));
  }

  /**
   * Highlighted item's model.
   */
  get active() {
    return this._active.value;
  }

  /**
   * Set current active option.
   */
  set active(active: M | undefined) {
    this._active.next(active);
  }

  /**
   * Observable with `active`.
   */
  get activeChanges() {
    return this._active.asObservable();
  }

  /**
   * Is control focused now.
   */
  get focused() {
    return this._focused.value;
  }

  /**
   * Observable with `focused`.
   */
  get focusedChanges() {
    return this._focused.asObservable();
  }

  /**
   * Register `ElementRef` of select element.
   */
  registerSelectRef(selectRem: ElementRef) {
    this.selectRef = selectRem;
    this.handleFocus();
  }

  /**
   * Additional configuration.
   * If some values are not defined, will be used default value.
   */
  overrideOptions(options: Partial<UiExtSelectOptions>) {
    this._options.next(options ? {...uiExtSelectDefaultOptions, ...options} : {...uiExtSelectDefaultOptions});
  }

  /**
   * Update options.
   * If some values are not defined, will be used current value.
   */
  updateOptions(options: Partial<UiExtSelectOptions>) {
    this._options.next({...this.options, ...options});
  }

  /**
   * Register value accessor hook.
   */
  registerOnChange(fn: any) {
    this._vaChanges.subscribe(fn);
  }

  /**
   * Register value accessor hook.
   */
  registerOnTouched(fn: any) {
    this._vaTouches.subscribe(fn);
  }

  /**
   * Call when input changes by user.
   */
  userInput(input: string) {
    this.input = input;
    this.userInputs.next(input);
  }

  /**
   * Call when user click on component.
   */
  mousedown(event?: any) {
    this.mouseDowns.next(event);
  }

  /**
   * Call when user focus component.
   */
  focus() {
    this._focused.next(true);
  }

  /**
   * Call when user leave the component.
   */
  blur() {
    this._focused.next(false);
  }

  /**
   * Call when user pick an item.
   */
  select(model: M | undefined) {
    this.selections.next(model);
  }

  /**
   * Remove item from model.
   * Needed for multiple mode.
   *
   * Call without param to reset model to undefined (or empty array if multiple).
   */
  remove(model?: M) {
    this.removals.next(model);
  }

  /**
   * Value accessor hook.
   */
  writeValue(model: M | M[]) {
    this.model = model;
  }

  /**
   * Move active cursor.
   */
  moveActive(modifier: number) {
    const items = this.itemsView.map(i => i.model);
    const current = this.active ? items.indexOf(this.active) : 0;
    const next = current + modifier;
    if (next < 0) {
      this.active = items[0];
    } else if (next >= items.length) {
      this.active = items[items.length - 1];
    } else {
      this.active = items[next];
    }
  }

  /**
   * Initialize automatic change detection run.
   */
  initChangeDetection() {
    this.viewChanges.subscribe(() => {
      this.cdr.detectChanges();
    });
    this.modelChanges.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  private handleItemsDisplay() {
    this.handleItemsDisplayInSelectMode();
    this.handleItemsDisplayInAutocompleteMode();
  }

  private handleItemsDisplayInSelectMode() {
    // Toggle displaying on click
    this.mouseDowns
      .pipe(
        filter(() => !this.isAutocomplete),
      )
      .subscribe(e => {
        this.itemsDisplay = !this.itemsDisplay;
      });
    // Update display state on focus/blur
    this._focused
      .pipe(
        distinctUntilChanged(),
        filter(() => !this.isAutocomplete),
      )
      .subscribe(focused => {
        if (focused && !!this.options.showItemsOnFocus) {
          this.itemsDisplay = true;
        }
        if (!focused) {
          this.itemsDisplay = false;
        }
      });
    // Show when user inputs something
    this.userInputs
      .pipe(
        filter(() => !this.isAutocomplete),
        filter(() => !this.itemsDisplay),
      )
      .subscribe(() => {
        this.itemsDisplay = true;
      });
    // Show when hidden and user presses SPACE
    this.keyDowns
      .pipe(
        filter(() => !this.isAutocomplete),
        filter(() => !this.itemsDisplay),
        filter(e => !e.handled),
        filter(e => e.event.key === ' ' || e.event.key === 'ArrowUp' || e.event.key === 'Up'
          || e.event.key === 'ArrowDown' || e.event.key === 'Down'),
      )
      .subscribe(e => {
        e.event.preventDefault();
        e.handled = true;
        this.itemsDisplay = true;
      });
    // Hide when user selects an item
    this.selections
      .pipe(
        filter(() => !this.isAutocomplete),
        filter(() => this.itemsDisplay),
      )
      .subscribe(() => {
        this.itemsDisplay = false;
      });
    // Hide on ESC
    this.keyDowns
      .pipe(
        filter(() => !this.isAutocomplete),
        filter(() => this.itemsDisplay),
        filter(e => !e.handled),
        filter(e => e.event.key === 'Escape' || e.event.key === 'Esc'),
      )
      .subscribe(e => {
        e.event.preventDefault();
        e.handled = true;
        this.itemsDisplay = false;
      });
  }

  private handleItemsDisplayInAutocompleteMode() {
    // Show when search toggle loading
    this._loading
      .pipe(
        distinctUntilChanged(),
        filter(() => this.isAutocomplete),
        filter(() => this.loading),
      )
      .subscribe(() => {
        this.itemsDisplay = true;
      });
    // Hide on blur
    this._focused
      .pipe(
        distinctUntilChanged(),
        filter(() => this.isAutocomplete),
      )
      .subscribe(focused => {
        if (!focused) {
          this.itemsDisplay = false;
        }
      });
    // Hide when user selects an item
    this.selections
      .pipe(filter(() => this.isAutocomplete))
      .subscribe(() => {
        this.itemsDisplay = false;
      });
    // Hide on ESC
    this.keyDowns
      .pipe(
        filter(() => this.isAutocomplete),
        filter(() => this.itemsDisplay),
        filter(e => !e.handled),
        filter(e => e.event.key === 'Escape' || e.event.key === 'Esc'),
      )
      .subscribe(e => {
        e.event.preventDefault();
        e.handled = true;
        this.itemsDisplay = false;
      });
  }

  private handleInput() {
    // Clean-up when model changes
    this._model.subscribe(() => {
      this._input.next('');
    });
  }

  /**
   * Search handlers (in autocomplete mode).
   */
  private handleSearch() {
    // Search function called on:
    merge(
      // user input something
      this.userInputs.pipe(
        debounce(() => timer(this.options.searchDebounce || 0)),
      ),
      // on focus (with enabled option)
      this._focused.pipe(
        distinctUntilChanged(),
        filter(f => f && !!this.options.searchOnFocus),
      ),
    )
      .pipe(
        filter(() => this.isAutocomplete),
        map(() => this.input),
        // Start loading
        tap(() => this._loading.next(true)),
        switchMap(request => {
          return this.processSearch(request).pipe(
            // Reset search if user leave the control
            takeUntil(this._focused.pipe(
              filter(f => !f),
              // Stop loading
              tap(() => this._loading.next(false)),
            )),
          );
        }),
      )
      .subscribe(searchItems => {
        this.searchItems.next(searchItems);
        this._loading.next(false);
      });
  }

  private processSearch(request: string): Observable<UiExtSelectItem<M>[]> {
    if (this._searchFn) {
      if (isFunction(this._searchFn)) {
        const raw = this._searchFn(request);
        if (isArray(raw)) {
          return from([raw]);
        } else if (raw instanceof Observable) {
          return raw;
        } else {
          throw this.error('Search result is broken!');
        }
      } else {
        throw this.error('"searchFn" should be a function!');
      }
    } else {
      throw this.error('Cannot process search without "searchFn"');
    }
  }

  /**
   * Handle keyboard.
   */
  private handleKeyboard() {
    if (this.platform.isBrowser() && this.elRef && this.elRef.nativeElement) {
      fromEvent<KeyboardEvent>(this.elRef.nativeElement, 'keydown')
        .pipe(
          takeUntil(this.destroy),
          // Do not propagate keydown if control is disabled
          filter(() => !this.disabled),
        )
        .subscribe(event => {
          this.keyDowns.next({
            event,
            handled: false,
          });
        });
    }
  }

  private error(error: string) {
    return new Error(`KitSelectService: ${error}`);
  }

  private handleItemsView() {
    // Update items view on:
    merge(
      // display state changes
      this._itemsDisplay,
      // items changes
      this._items,
      // model changes
      this._model,
      // filter changes
      this._filter,
      // user inputs something
      this.userInputs,
      // search items changed
      this.searchItems,
    )
      .subscribe(() => {
        this.updateItemsView();
      });
  }

  private updateItemsView() {
    const items = this._searchFn ? this.searchItems.value : this.items;
    const itemsView = items
      .map(i => {
        const view = isDefined(i.itemView) ? i.itemView : i.model;
        return {
          model: i.model,
          view,
          filter: (view + '').toLowerCase(),
        };
      })
      .filter(i => {
        // Filter for multiple (remove already used)
        if (this.multiple && isArray(this.model)) {
          return this.model.indexOf(i.model) === -1;
        } else {
          return true;
        }
      })
      .filter(i => {
        // Filter by native/custom filters
        if (this.filter && this.input) {
          const input = this.input.toLowerCase();
          switch (this.filter) {
            case 'includes':
              return i.filter ? i.filter.includes(input) : false;
            case 'startsWith':
              return i.filter ? i.filter.startsWith(input) : false;
            case 'endsWith':
              return i.filter ? i.filter.endsWith(input) : false;
            default:
              if (isFunction(this.filter)) {
                return this.filter(this.input, i);
              } else {
                throw this.error('Filter usage error');
              }
          }
        } else {
          return true;
        }
      });
    this._itemsView.next(itemsView);
  }

  private handleModel() {
    // Update model when user selects an item
    this.selections
      .subscribe(model => {
        if (model) {
          if (this._searchFn) {
            this.mergeSearchItem(model);
          }
          if (!this.multiple) {
            this.model = model;
            this.active = model;
          } else {
            if (isArray(this.model)) {
              this.model = [...this.model, model];
            } else {
              this.model = [model];
            }
            this.active = undefined;
          }
        } else {
          this.model = model;
        }
        this._vaChanges.next(this.model);
      });
    // Update model on removal
    this.removals
      .subscribe(model => {
        if (model) {
          if (isArray(this.model)) {
            this.model = this.model.filter(m => m !== model);
          } else {
            throw this.error('Model is not an array, item can not be removed');
          }
        } else {
          this.model = this.multiple ? [] : undefined;
        }
        this._vaChanges.next(this.model);
      });
  }

  /**
   * Merge items from search to the main items array.
   */
  private mergeSearchItem(model: M) {
    const item = this.searchItems.value.find(i => i.model === model);
    if (item) {
      const double = this.items.find(i => i.model === model);
      if (!double) {
        this.items = [...this.items, item];
      }
    } else {
      throw this.error('Item for merge not found!');
    }
  }

  private handleActive() {
    // Update active position on:
    merge(
      // items display
      this._itemsDisplay.pipe(
        distinctUntilChanged(),
        filter(id => id),
      ),
      // items view changes
      this._itemsView.pipe(
        distinctUntilChanged(),
      ),
    )
      .subscribe(itemsDisplay => {
        if (this.itemsView.find(i => i.model === this.model) && !isArray(this.model)) {
          // Set current model as active
          this.active = this.model;
        } else {
          // Set first item as active
          this.active = this.itemsView.length > 0
            ? this.itemsView[0].model
            : undefined;
        }
      });
    // Keaboard controls
    this.keyDowns
      .pipe(
        filter(() => this.itemsDisplay),
        filter(e => !e.handled),
      )
      .subscribe(e => {
        switch (e.event.key) {
          case 'ArrowUp':
          case 'Up': // EDGE fix
            e.event.preventDefault();
            this.moveActive(-1);
            break;
          case 'ArrowDown':
          case 'Down': // EDGE fix
            e.event.preventDefault();
            this.moveActive(1);
            break;
          case 'PageUp':
            e.event.preventDefault();
            this.moveActive(-10);
            break;
          case 'PageDown':
            e.event.preventDefault();
            this.moveActive(10);
            break;
        }
      });
  }

  private handleInputView() {
    // Update input view on:
    merge(
      // items changes
      this._items,
      // model changed
      this._model,
    )
      .subscribe(() => {
        this.updateInputView();
      });
  }

  private updateInputView() {
    if (!this._multiple) {
      this._inputView.next(
        this.model
          ? [this.getItemInputView(this.model as M)]
          : undefined);
    } else {
      this._inputView.next(
        this.model && isArray(this.model)
          ? this.model
          .map(m => this.getItemInputView(m))
          .filter(isNotUndefined)
          : []);
    }
  }

  private getItemInputView(model: M): UiExtSelectInputView<M> {
    const item = this.items.find(i => i.model === model);
    if (item) {
      return {
        model: item.model,
        view: isDefined(item.inputView)
          ? item.inputView
          : isDefined(item.itemView)
            ? item.itemView
            : item.model,
      };
    } else {
      return {
        model,
        view: model,
      };
    }
  }

  private handleSelect() {
    // Select on ENTER
    this.keyDowns
      .pipe(
        filter(() => this.itemsDisplay),
        filter(() => !!this.active),
        filter(e => e.event.key === 'Enter' && !e.handled),
      )
      .subscribe(e => {
        e.event.preventDefault();
        e.handled = true;
        this.select(this.active);
      });
    // Select on empty input and SPACE
    this.keyDowns
      .pipe(
        filter(() => this.itemsDisplay),
        filter(() => !!this.active),
        filter(() => !this.input),
        filter(e => e.event.key === ' ' && !e.handled),
      )
      .subscribe(e => {
        e.event.preventDefault();
        e.handled = true;
        this.select(this.active);
      });
  }

  private handleRemoval() {
    // Emit remove if user press BACKSPACE with empty filter
    this.keyDowns
      .pipe(
        filter(() => !!this.multiple),
        filter(() => !this.input),
        filter(e => !e.handled),
        filter(e => e.event.key === 'Backspace'),
      )
      .subscribe(e => {
        if (isArray(this.model) && this.model.length > 0) {
          e.event.preventDefault();
          e.handled = true;
          this.removals.next(this.model[this.model.length - 1]);
        }
      });
  }

  private handleChangeDetection() {
    merge(
      this._focused,
      this._itemsDisplay,
      this._itemsView,
      this._inputView,
    )
      .pipe(
        mapTo(undefined),
        debounceTime(0),
      )
      .subscribe(this._viewChanges);
  }

  private handleFocus() {
    this.focusListener.add(this.selectRef.nativeElement);
    this.focusListener.focus
      .subscribe((event: any) => {
        event.handled = true;
        this.focus();
      });
    this.focusListener.blur
      .subscribe((event: any) => {
        event.handled = true;
        this.blur();
      });
  }
}
