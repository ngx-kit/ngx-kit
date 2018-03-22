import { animate, style, transition, trigger } from '@angular/animations';
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
import { isString, KitFocusListenerService, KitOverlayPositionService, KitStyleService, } from '@ngx-kit/core';
import { UiAutocompleteOption } from '../meta';

@Component({
  selector: 'ui-autocomplete-options',
  templateUrl: './ui-autocomplete-options.component.html',
  styleUrls: ['./ui-autocomplete-options.component.scss'],
  providers: [
    KitOverlayPositionService,
    KitStyleService,
  ],
  animations: [
    trigger('host', [
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
export class UiAutocompleteOptionsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() anchor: HTMLElement;

  @Input() options: UiAutocompleteOption[] = [];

  @Input() selected: number;

  @Input() optionTemplate: TemplateRef<any>;

  @Output() select = new EventEmitter<any>();

  @HostBinding('@host') hostTrigger = true;

  optionsLabels: string[] = [];

  constructor(
    private elRef: ElementRef,
    private overlayPosition: KitOverlayPositionService,
    private focusListener: KitFocusListenerService,
  ) {
  }

  ngOnInit() {
    // Register in blur service
    this.focusListener.register(this.elRef.nativeElement);
    // Setup overlay position
    this.overlayPosition.type = 'dropdown';
    this.overlayPosition.position = 'bottom';
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('anchor' in changes) {
      this.overlayPosition.anchor = this.anchor;
      this.overlayPosition.reposition();
    }
    if ('options' in changes) {
      this.optionsLabels = this.options.map(o => isString(o) ? o : o.label);
    }
  }

  ngOnDestroy() {
    this.focusListener.remove(this.elRef.nativeElement);
  }
}
