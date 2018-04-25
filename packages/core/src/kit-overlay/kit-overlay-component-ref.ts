import { ChangeDetectorRef, ComponentRef, Injectable, SimpleChange, SimpleChanges, Type } from '@angular/core';
import { KitOverlayInput } from './meta';

@Injectable()
export class KitOverlayComponentRef<T> {
  componentRef: ComponentRef<T>;

  /**
   * Pass input to the hosted component.
   */
  input(input: KitOverlayInput) {
    if (this.componentRef && this.componentRef.instance) {
      // Set props and gather changes object
      const changes: SimpleChanges = {};
      for (const name in input) {
        if (input.hasOwnProperty(name)) {
          const prev = this.componentRef[name];
          this.componentRef.instance[name] = input[name];
          changes[name] = new SimpleChange(prev, input[name], false);
        }
      }
      // Emit ngOnChanges hook
      if (this.componentRef.instance['ngOnChanges']) {
        this.componentRef.instance['ngOnChanges'](changes);
      }
      // Run change detection on the component host (for applying host bindings)
      this.componentRef.changeDetectorRef.detectChanges();
      // Run change detection inside component
      this.componentRef.injector.get<ChangeDetectorRef>(ChangeDetectorRef as any).detectChanges();
    } else {
      throw new Error('Modal initiated without instance. Input could be passed programmatically only for ' +
        'service-hosted modals.');
    }
  }
}
