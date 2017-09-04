import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Inject, Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitAutoCompleteStyle } from '../core/meta/tokens';
import { KitInputComponent } from '../input/kit-input.component';
import { KitDataFactory } from './meta';

export const KIT_AUTO_COMPLETE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitAutoCompleteComponent),
  multi: true,
};

/**
 * @todo convert all data rows to string
 * @todo dataSource pending loader
 * @todo cancel pending request
 */
@Component({
  selector: 'kit-auto-complete,[kitAutoComplete]',
  template: `
    <kit-input (keydown.ArrowUp)="activeUp($event)"
               (keydown.ArrowDown)="activeDown($event)"
               (keydown.Enter)="activePick($event)"
               [kitAnchor]
               #anchorRef="anchor"
               styler="input">
    </kit-input>
    <kit-overlay [anchor]="anchorRef"
                 [template]="resultsRef"
                 [opened]="results.length > 0"
                 [position]="'bottom'"
                 [type]="'dropdown'"
                 (outsideClick)="clearResults()">
    </kit-overlay>
    <ng-template #resultsRef>
      <div styler="results">
        <div *ngFor="let result of results; let i = index"
             [styler]="'result'"
             [stylerState]="{active: i === activeResult}"
             (click)="updateValue(result)">
          {{ result }}
        </div>
      </div>
    </ng-template>
  `,
  providers: [KIT_AUTO_COMPLETE_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAutoCompleteComponent implements ControlValueAccessor, AfterViewInit, KitControl<any> {
  activeResult = -1;

  anchorRef: any;

  @Input() data: string[] | null = null;

  @Input() dataFactory: KitDataFactory | null = null;

  @Input() debounce = 500;

  @ViewChild(forwardRef(() => KitInputComponent)) input: KitInputComponent;

  @Input() kitAutoComplete: null;

  results: string[] = [];

  state: any;

  private changes$ = new Subject<number>();

  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitAutoCompleteStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-auto-complete';
    this.styler.register(this.style);
  }

  ngAfterViewInit() {
    this.input.registerOnTouched(this.touches$);
    if (this.data !== null) {
      this.input.registerOnChange(this.handleDataSearch.bind(this));
    } else if (this.dataFactory !== null) {
      const changes$ = new Subject<any>();
      this.input.registerOnChange(changes$);
      changes$.debounceTime(this.debounce)
          .switchMap(this.dataFactory)
          .subscribe(res => {
            this.results = res;
            this.validateActiveResult();
          });
    } else {
      throw new Error(`[kit-auto-complete]: Data source was not declared, use [data] or [dataSourceUrl + dataSourceParam]`);
    }
  }

  activeDown(event: Event) {
    event.preventDefault();
    if (this.activeResult < this.results.length - 1) {
      this.activeResult++;
    }
  }

  activePick(event: Event) {
    event.preventDefault();
    const value = this.results[this.activeResult];
    if (value) {
      this.updateValue(value);
    }
  }

  activeUp(event: Event) {
    event.preventDefault();
    if (this.activeResult > 0) {
      this.activeResult--;
    }
  }

  clearResults(): void {
    this.results = [];
    this.activeResult = -1;
  }

  handleDataSearch(value: any) {
    if (this.data && value) {
      this.results = this.data.filter(x => x.indexOf(value) !== -1);
    } else {
      this.results = [];
    }
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
    this.input.setDisabledState(this.isDisabled);
  }

  updateValue(value: any) {
    this.writeValue(value);
    this.changes$.next(value);
    this.touches$.next(true);
    this.clearResults();
  }

  writeValue(value: any) {
    this.state = value;
    this.input.writeValue(value);
    this.cdr.markForCheck();
  }

  private validateActiveResult() {
    if (this.results.length === 0) {
      this.activeResult = -1;
    } else if (this.activeResult > this.results.length - 1) {
      this.activeResult = this.results.length - 1;
    }
  }
}
