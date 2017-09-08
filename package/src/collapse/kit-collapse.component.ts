import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
} from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { isArray } from '../util/is-array';
import { KitCollapseGroupComponent } from './kit-collapse-group.component';
import { KitCollapseStyle } from './kit-collapse.style';

// @todo direction: vertical, horizontal
@Component({
  selector: 'kit-collapse,[kitCollapse]',
  template: `
    <ng-content></ng-content>
  `,
  animations: [
    trigger('collapse', [
      state('in', style({height: '*'})),
      state('out', style({height: '0'})),
      transition('in => out', [
        animate('{{timings}}'),
      ]),
      transition('out => in', [
        animate('{{timings}}'),
      ]),
    ]),
  ],
  viewProviders: [
    StylerModule.forComponent(KitCollapseStyle),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitCollapseComponent implements OnChanges, OnInit {
  expanded = false;

  @Input() id: number | string;

  @Input() kitCollapse: null;

  private state: 'in' | 'out' | 'animated';

  constructor(private styler: StylerComponent,
              private cdr: ChangeDetectorRef,
              @Optional() private group: KitCollapseGroupComponent) {
    styler.classPrefix = 'kit-collapse';
  }

  @HostBinding('@collapse')
  get collapseTrigger() {
    return {
      value: this.expanded ? 'in' : 'out',
      params: {
        timings: '150ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
    };
  }

  @Input('expanded')
  set expandedSetter(expanded: boolean) {
    console.log('exp setter', this.id, expanded, this.expanded, this.state);
    if (this.state !== 'animated' && this.expanded !== expanded) {
      this.expanded = expanded;
      this.state = 'animated';
      this.stylerApply();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    if (this.group) {
      this.group.expandedId$.subscribe(id => {
        console.log('eI$ sub', id, this.id, isArray(id), isArray(id) ? id.indexOf(this.id) : null);
        this.expandedSetter = isArray(id)
            ? id.indexOf(this.id) !== -1
            : id === this.id;
      });
    }
    this.stylerApply();
  }

  @HostListener('@collapse.done')
  collapseDone() {
    this.state = this.expanded ? 'in' : 'out';
    this.stylerApply();
  }

  private stylerApply() {
    this.styler.host.applyState({
      state: this.state,
    });
  }
}
