import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { EvoSelectState } from '../evo-select-state';

@Component({
  selector: 'evo-select-results',
  templateUrl: './evo-select-items.component.html',
  styleUrls: ['./evo-select-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('popupHost', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('popup', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
        }),
        animate('100ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms', style({
          opacity: 0,
          transform: 'translateY(-5px)',
        })),
      ]),
    ]),
  ],
})
export class EvoSelectItemsComponent<M> implements OnInit {
  constructor(
    public state: EvoSelectState<M>,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    merge(
      this.state.itemsView,
      this.state.model,
      this.state.active,
    )
      .subscribe(iv => {
        this.cdr.markForCheck();
      });
  }

  select(model: M) {
    this.state.selections.next(model);
  }

  isActive(model: M) {
    return this.state.active.value === model;
  }

  isChecked(model: M) {
    return this.state.model.value === model;
  }
}