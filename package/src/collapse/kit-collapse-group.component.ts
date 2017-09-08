import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KitCollapseId } from './meta';

/**
 * @todo ngModel for expandedId
 */
@Component({
  selector: 'kit-collapse-group',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitCollapseGroupComponent implements OnChanges, OnInit, AfterContentInit {
  @Input() expandedId: KitCollapseId | KitCollapseId[];

  expandedId$ = new BehaviorSubject<KitCollapseId | KitCollapseId[]>(null);

  @Input() kitCollapseGroup: null;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterContentInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['expandedId']) {
      this.expandedId$.next(this.expandedId);
    }
  }

  ngOnInit() {
    this.expandedId$.next(this.expandedId);
  }
}
