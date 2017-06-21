import { AfterViewInit, Component, forwardRef, Inject, Input, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { StylerComponent } from '@ngx-kit/styler';
import { KitInputComponent } from '@ngx-kit/forms';
import { kitComponentAutoComplete, KitComponentStyle } from '@ngx-kit/core';

import { KitDataSourceFactory } from './data-source-factory';

export const KIT_AUTO_COMPLETE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitAutoCompleteComponent),
  multi: true
};

/**
 * @todo convert all data rows to string
 * @todo dataSource pending loader
 * @todo cancel pending request
 */
@Component({
  selector: 'kit-auto-complete',
  template: `
    <kit-input (keydown.ArrowUp)="activeUp($event)"
               (keydown.ArrowDown)="activeDown($event)"
               (keydown.Enter)="activePick($event)"
               [kitAnchor]
               #anchorRef="anchor"
               styler="input">
    </kit-input>
    <div *ngIf="results.length > 0">
      <kit-overlay [template]="resultsRef"
                   [type]="'dropdown'"
                   [anchor]="anchorRef"
                   (outsideClick)="clearResults()">
      </kit-overlay>
      <ng-template #resultsRef>
        <div styler="results">
          <div *ngFor="let result of results; let i = index"
               [styler]="['result', {active: i === activeResult}]"
               (click)="pick(result)">
            {{ result }}
          </div>
        </div>
      </ng-template>
    </div>
  `,
  providers: [KIT_AUTO_COMPLETE_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ]
})
export class KitAutoCompleteComponent implements ControlValueAccessor, AfterViewInit {

  @Input() data: string[] | null = null;
  @Input() dataSourceFactory: KitDataSourceFactory | null = null;
  @Input() debounce = 500;

  @ViewChild(forwardRef(() => KitInputComponent)) input: KitInputComponent;

  results: string[] = [];

  private _value: any;
  private activeResult: number = -1;

  private isDisabled = false;
  private changes$ = new Subject<number>();
  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAutoComplete) private style: KitComponentStyle,
              private renderer: Renderer2) {
    this.styler.register(this.style.getStyles());
  }

  ngAfterViewInit() {
    this.input.registerOnTouched(this.touches$);
    if (this.data !== null) {
      this.input.registerOnChange(this.handleDataSearch.bind(this));
    } else if (this.dataSourceFactory !== null) {
      const changes$ = new Subject<any>();
      this.input.registerOnChange(changes$);
      changes$.debounceTime(this.debounce)
          .switchMap(this.dataSourceFactory)
          .subscribe(res => {
            this.results = res;
            this.validateActiveResult();
          });
    } else {
      throw new Error(`[kit-auto-complete]: Data source was not declared, use [data] or [dataSourceUrl + dataSourceParam]`);
    }
  }

  writeValue(value: any) {
    this.value = value;
    this.input.writeValue(this.value);
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

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.input.writeValue(this._value);
    // emit
    this.changes$.next(this._value);
    this.touches$.next(true);
  }

  handleDataSearch(value: any) {
    if (this.data && value) {
      this.results = this.data.filter(x => x.indexOf(value) !== -1);
    } else {
      this.results = [];
    }
  }

  pick(value: string): void {
    this.value = value;
    this.clearResults();
  }

  activeUp(event: Event) {
    event.preventDefault();
    if (this.activeResult > 0) {
      this.activeResult--;
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
      this.pick(value);
    }
  }

  clearResults(): void {
    this.results = [];
    this.activeResult = -1;
  }

  private validateActiveResult() {
    if (this.results.length === 0) {
      this.activeResult = -1;
    } else if (this.activeResult > this.results.length - 1) {
      this.activeResult = this.results.length - 1;
    }
  }

}
