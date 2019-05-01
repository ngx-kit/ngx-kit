import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { KitAnchor } from '../../kit-anchor/meta';
import { KitOverlayToggleTrigger } from '../meta';

@Directive({
  selector: '[kitOverlayToggle]',
  exportAs: 'toggle',
})
export class KitOverlayToggleDirective implements KitAnchor {
  @Input() trigger: KitOverlayToggleTrigger = 'click';

  @Output() shows = new EventEmitter<void>();

  @Output() closes = new EventEmitter<void>();

  private _state = new BehaviorSubject<boolean>(false);

  constructor(private _elementRef: ElementRef) {
    this._state.asObservable().subscribe(state => {
      if (state) {
        this.shows.emit();
      } else {
        this.closes.emit();
      }
    });
  }

  get stateChanges(): Observable<boolean> {
    return this._state.asObservable();
  }

  /**
   * Get state.
   */
  get state() {
    return this._state.value;
  }

  /**
   * Get reference to anchored element.
   */
  get elementRef(): ElementRef {
    return this._elementRef;
  }

  /**
   * Get anchored html-element.
   */
  get nativeEl() {
    return this._elementRef.nativeElement;
  }

  @HostListener('click') clickHandler() {
    if (this.trigger === 'click') {
      this.toggle();
    }
  }

  @HostListener('mouseenter') mouseenterHandler() {
    if (this.trigger === 'hover') {
      this.show();
    }
  }

  @HostListener('mouseleave') mouseleaveHandler() {
    if (this.trigger === 'hover') {
      this.close();
    }
  }

  /**
   * Set state to true.
   */
  show() {
    this._state.next(true);
  }

  /**
   * Set state to false.
   */
  close() {
    this._state.next(false);
  }

  /**
   * Toggle state.
   */
  toggle() {
    this._state.next(!this._state.value);
  }
}
