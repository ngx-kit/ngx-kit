import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, ElementRef, Inject, Injectable, Injector, OnDestroy, Optional, Type } from '@angular/core';
import { EvoFocusListener } from '@ngx-kit/evo/util';
import { BehaviorSubject, from, fromEvent, merge, Observable, Subject, timer } from 'rxjs';
import { debounce, debounceTime, delay, distinctUntilChanged, filter, map, mapTo, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { evoSelectDefaultOptions, EvoSelectFilter, EvoSelectInputView, EvoSelectItem, EvoSelectOptions, EvoSelectSearchFn } from './meta';
import { EvoSelectState } from './evo-select-state';

/**
 * Service for handling state of extended selector.
 * Should be provided on a component.
 */
@Injectable()
export class EvoSelect<M> implements OnDestroy {
  /**
   * Is control disabled.
   */
  disabled = false;

  itemsComponent?: Type<any>;

  public readonly state = new EvoSelectState<M>();

  /**
   * @input
   */
  private _searchFn?: EvoSelectSearchFn<M>;

  /**
   * @input
   */
  private readonly _filter = new BehaviorSubject<EvoSelectFilter<M> | undefined>(undefined);

  /**
   * @input
   */
  private readonly _options = new BehaviorSubject<EvoSelectOptions>(evoSelectDefaultOptions);

  /**
   * @input
   */
  private _multiple?: boolean;

  private readonly searchItems = new BehaviorSubject<EvoSelectItem<M>[]>([]);

  private selectRef: ElementRef;

  private readonly _inputViews = new BehaviorSubject<EvoSelectInputView<M>[] | undefined>(undefined);

  private readonly _focused = new BehaviorSubject<boolean>(false);

  private readonly _itemsDisplay = new BehaviorSubject<boolean>(false);

  private readonly userInputs = new Subject<string>();

  private readonly _input = new BehaviorSubject<string>('');

  private readonly removals = new Subject<M | undefined>();

  private readonly mouseDowns = new Subject<any>();

  private readonly keyDowns = new Subject<{event: KeyboardEvent, handled: boolean}>();

  private destroy = new Subject<void>();

  /**
   * ValueAccessor changes.
   */
  private _vaChanges = new Subject<M | M[]>();

  private _vaTouches = new Subject<void>();

  private _viewChanges = new Subject<void>();

  private overlayRef: OverlayRef;

  private overlayAttached = false;

  constructor(
    private elRef: ElementRef,
    private platform: Platform,
    private cdr: ChangeDetectorRef,
    private overlay: Overlay,
    @Optional() @Inject(DOCUMENT) private document: any,
    private focusListener: EvoFocusListener,
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
    this.handleItemsAttachment();
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
  set searchFn(searchFn: EvoSelectSearchFn<M> | undefined) {
    this._searchFn = searchFn;
  }

  /**
   * True if items received from `searchFn` instead of `items`.
   */
  get isAutocomplete() {
    return !!this._searchFn;
  }

  get model() {
    return this.state.model.value;
  }

  /**
   * Set current value of the control.
   */
  set model(model: M | M[] | undefined) {
    this.state.model.next(model);
  }

  /**
   * View displayed in input section.
   * Always returns an array. For non-multiple select use the first item: `inputViews[0]`.
   */
  get inputViews(): EvoSelectInputView<M>[] {
    return this._inputViews.value ? this._inputViews.value : [];
  }

  /**
   * Observable with `inputView`.
   */
  get inputViewsChanges() {
    return this._inputViews.asObservable();
  }

  get filter() {
    return this._filter.value;
  }

  /**
   * Set filter to search through the current list of `[items]`.
   */
  set filter(f: EvoSelectFilter<M> | undefined) {
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
      (this.multiple && Array.isArray(this.model) && this.model.length > 0)
      || (!this.multiple && this.model));
  }

  /**
   * Highlighted item's model.
   */
  get active() {
    return this.state.active.value;
  }

  /**
   * Set current active option.
   */
  set active(active: M | undefined) {
    this.state.active.next(active);
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
  overrideOptions(options: Partial<EvoSelectOptions>) {
    this._options.next(options ? {...evoSelectDefaultOptions, ...options} : {...evoSelectDefaultOptions});
  }

  /**
   * Update options.
   * If some values are not defined, will be used current value.
   */
  updateOptions(options: Partial<EvoSelectOptions>) {
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
    this.state.selections.next(model);
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
    const items = this.state.itemsView.value.map(i => i.model);
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
    this.state.model.subscribe(() => {
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
    this.state.selections
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
    this.state.loading
      .pipe(
        distinctUntilChanged(),
        filter(() => this.isAutocomplete),
        filter(() => this.state.loading.value),
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
    this.state.selections
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
    this.state.model.subscribe(() => {
      this._input.next('');
    });
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
        tap(() => this.state.loading.next(true)),
        switchMap(request => {
          return this.processSearch(request).pipe(
            // Reset search if user leave the control
            takeUntil(this._focused.pipe(
              filter(f => !f),
              // Stop loading
              tap(() => this.state.loading.next(false)),
            )),
          );
        }),
      )
      .subscribe(searchItems => {
        this.searchItems.next(searchItems);
        this.state.loading.next(false);
      });
  }

  private processSearch(request: string): Observable<EvoSelectItem<M>[]> {
    if (this._searchFn) {
      if (typeof this._searchFn === 'function') {
        const raw = this._searchFn(request);
        if (Array.isArray(raw)) {
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
    if (this.platform.isBrowser && this.elRef && this.elRef.nativeElement) {
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
    return new Error(`EvoSelectService: ${error}`);
  }

  private handleItemsView() {
    // Update items view on:
    merge(
      // display state changes
      this._itemsDisplay,
      // items changes
      this.state.items,
      // model changes
      this.state.model,
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
    const items = this._searchFn ? this.searchItems.value : this.state.items.value;
    const itemsView = items
      .map(i => {
        const view = typeof i.itemView === 'undefined' ? i.model : i.itemView;
        return {
          model: i.model,
          view,
          filter: (view + '').toLowerCase(),
        };
      })
      .filter(i => {
        // Filter for multiple (remove already used)
        if (this.multiple && Array.isArray(this.model)) {
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
              if (typeof this.filter === 'function') {
                return this.filter(this.input, i);
              } else {
                throw this.error('Filter usage error');
              }
          }
        } else {
          return true;
        }
      });
    this.state.itemsView.next(itemsView);
  }

  private handleModel() {
    // Update model when user selects an item
    this.state.selections
      .subscribe(model => {
        if (model) {
          if (this._searchFn) {
            this.mergeSearchItem(model);
          }
          if (!this.multiple) {
            this.model = model;
            this.active = model;
          } else {
            if (Array.isArray(this.model)) {
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
          if (Array.isArray(this.model)) {
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
      const double = this.state.items.value.find(i => i.model === model);
      if (!double) {
        this.state.items.next([...this.state.items.value, item]);
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
      this.state.itemsView.pipe(
        distinctUntilChanged(),
      ),
    )
      .subscribe(itemsDisplay => {
        if (this.state.itemsView.value.find(i => i.model === this.model) && !Array.isArray(this.model)) {
          // Set current model as active
          this.active = this.model;
        } else {
          // Set first item as active
          this.active = this.state.itemsView.value.length > 0
            ? this.state.itemsView.value[0].model
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
      this.state.items,
      // model changed
      this.state.model,
    )
      .subscribe(() => {
        this.updateInputView();
      });
  }

  private updateInputView() {
    if (!this._multiple) {
      this._inputViews.next(
        this.model
          ? [this.getItemInputView(this.model as M)]
          : undefined);
    } else {
      this._inputViews.next(
        this.model && Array.isArray(this.model)
          ? this.model
          .map(m => this.getItemInputView(m))
          .filter(m => typeof m !== 'undefined')
          : []);
    }
  }

  private getItemInputView(model: M): EvoSelectInputView<M> {
    const item = this.state.items.value.find(i => i.model === model);
    if (item) {
      return {
        model: item.model,
        view: typeof item.inputView !== 'undefined'
          ? item.inputView
          : typeof item.itemView !== 'undefined'
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
        if (Array.isArray(this.model) && this.model.length > 0) {
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
      this.state.itemsView,
      this._inputViews,
    )
      .pipe(
        mapTo(undefined),
        debounceTime(0),
      )
      .subscribe(this._viewChanges);
  }

  private handleItemsAttachment() {
    this.itemsDisplayChanges.subscribe(display => {
      if (display) {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
          return;
        }
        this.overlayRef = this.overlay.create({
          positionStrategy: this.overlay.position()
            .flexibleConnectedTo(this.selectRef)
            .withPositions([this.options.itemsPosition]),
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          width: this.selectRef.nativeElement.getBoundingClientRect().width,
        });
        const injector = Injector.create({
          providers: [
            {
              provide: EvoSelectState,
              useValue: this.state,
            },
            {
              provide: EvoFocusListener,
              useValue: this.focusListener,
            },
          ],
        });
        if (!this.itemsComponent) {
          throw new Error('Select: itemsComponent should be defined.');
        }
        const portal = new ComponentPortal(this.itemsComponent, null, injector);
        this.overlayRef.attachments()
          .pipe(delay(1))
          .subscribe(() => {
            this.overlayAttached = true;
          });
        this.overlayRef.attach(portal);
        merge(
          this.getOutsideClickStream(),
          this.overlayRef.detachments(),
        ).pipe(
          take(1),
        ).subscribe(() => {
          this.itemsDisplay = false;
          this.overlayAttached = false;
        });
      } else {
        if (this.overlayRef) {
          this.overlayRef.detach();
        }
      }
    });
  }

  private getOutsideClickStream(): Observable<any> {
    return merge(
      fromEvent(this.document, 'click') as Observable<MouseEvent>,
      fromEvent(this.document, 'touchend') as Observable<TouchEvent>,
    )
      .pipe(filter(event => {
        const clickTarget = event.target as HTMLElement;
        return this.overlayAttached &&
          !this.selectRef.nativeElement.contains(clickTarget) &&
          (!!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget));
      }));
  }
}
