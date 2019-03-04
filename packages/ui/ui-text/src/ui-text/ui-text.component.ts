import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { KitFormFieldService } from '@ngx-kit/core';

@Component({
  // tslint:disable-next-line
  selector: 'input[uiText],textarea[uiText]',
  template: '',
  styleUrls: ['./ui-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextComponent implements OnInit {
  @Input() uiText: void;

  @HostBinding('class.-has-errors') hasErrorsClass = false;

  constructor(
    @Optional() private formFieldService: KitFormFieldService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    if (this.formFieldService) {
      this.formFieldService.control.errorStateChanges.subscribe(errors => {
        this.hasErrorsClass = !errors || errors.length > 0;
        this.cdr.detectChanges();
      });
    }
  }
}
