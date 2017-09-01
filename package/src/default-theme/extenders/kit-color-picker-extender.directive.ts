import { Directive, OnChanges, Self, } from '@angular/core';
import { KitColorPickerComponent } from '../../color-picker/kit-color-picker.component';

@Directive({
  selector: 'kit-color-picker,[kitColorPicker]',
})
export class KitColorPickerExtenderDirective implements OnChanges {
  constructor(@Self() private colorPicker: KitColorPickerComponent) {
  }

  ngOnChanges() {
  }
}
