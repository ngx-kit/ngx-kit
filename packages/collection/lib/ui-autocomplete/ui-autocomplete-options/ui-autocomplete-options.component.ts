import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { isString, KitFocusListenerService } from '@ngx-kit/core';
import { UiAutocompleteOption } from '../meta';

@Component({
  selector: 'ui-autocomplete-options',
  templateUrl: './ui-autocomplete-options.component.html',
  styleUrls: ['./ui-autocomplete-options.component.scss'],
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scaleY(0.5)',
        }),
        animate('150ms ease-out', style({
          opacity: 1,
          transform: 'scaleY(1)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0,
          transform: 'scaleY(0.5)',
        })),
      ]),
    ]),
  ],
})
export class UiAutocompleteOptionsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() anchor: HTMLElement;

  @Input() options: UiAutocompleteOption[] = [];

  @Input() selected: number;

  @Input() optionTemplate: TemplateRef<any>;

  @Output() optionSelect = new EventEmitter<any>();

  @HostBinding('@host') hostTrigger = true;

  optionsLabels: string[] = [];

  constructor(
    private elRef: ElementRef,
    private focusListener: KitFocusListenerService,
  ) {
  }

  ngOnInit() {
    // Register in blur service
    this.focusListener.add(this.elRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      this.optionsLabels = this.options.map(o => isString(o) ? o : o.label);
    }
  }

  ngOnDestroy() {
    this.focusListener.remove(this.elRef.nativeElement);
  }
}
