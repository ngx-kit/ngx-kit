import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { UiDialogService } from '../ui-dialog.service';

@Component({
  templateUrl: './ui-dialog-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogDemoComponent implements OnInit {
  constructor(private dialog: UiDialogService) {
  }

  ngOnInit() {
  }

  alert() {
    this.dialog.alert({message: 'Alert message'});
  }

  alertWithTemplate(template: TemplateRef<any>) {
    this.dialog.alert({template});
  }

  alertWithHandler() {
    this.dialog
      .alert({message: 'Alert message'})
      .subscribe(() => {
        alert('Alert closed');
      });
  }

  alertWithColor(color: string) {
    this.dialog.alert({message: 'Message with color', color});
  }

  confirm() {
    this.dialog
      .confirm({message: 'Want to confirm?'})
      .subscribe(result => {
        alert(result ? 'Confirmed!' : 'Canceled!');
      });
  }

  prompt(template: TemplateRef<any>) {
    this.dialog
      .prompt<{model: string}>({template: template})
      .subscribe(result => {
        if (result !== false) {
          alert(`Model: "${result.model}"`);
        } else {
          alert('Prompt canceled');
        }
      });
  }
}
