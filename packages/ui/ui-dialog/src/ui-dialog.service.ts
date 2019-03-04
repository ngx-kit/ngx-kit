import { Injectable, TemplateRef } from '@angular/core';
import { KitModalService } from '@ngx-kit/core';
import { Observable, Subject } from 'rxjs';
import { UiDialogType } from './meta';
import { UiDialogComponent } from './ui-dialog/ui-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UiDialogService {
  constructor(private modal: KitModalService) {
  }

  alert({header = 'Alert', message, template, color = 'default'}: {
    header?: string;
    message?: string;
    template?: TemplateRef<any>;
    color?: string;
  }): Observable<void> {
    const ref = this.modal.show({component: UiDialogComponent});
    ref.input({
      options: {
        type: UiDialogType.Alert,
        header,
        message,
        template,
        color,
      },
    });
    const result = new Subject<void>();
    ref.onClose.subscribe(() => {
      result.next();
    });
    return result;
  }

  confirm({header = 'Confirm', message, template, color = 'default'}: {
    header?: string;
    message?: string;
    template?: TemplateRef<any>;
    color?: string;
  }): Observable<boolean> {
    const ref = this.modal.show({component: UiDialogComponent});
    ref.input({
      options: {
        type: UiDialogType.Confirm,
        header,
        message,
        template,
        color,
      },
    });
    const result = new Subject<boolean>();
    ref.onClose.subscribe(() => {
      result.next(ref.instance.result);
    });
    return result;
  }

  prompt<T>({header = 'Prompt', template, color = 'default'}: {
    header?: string;
    template: TemplateRef<any>;
    color?: string;
  }): Observable<T | false> {
    const ref = this.modal.show({component: UiDialogComponent});
    ref.input({
      options: {
        type: UiDialogType.Prompt,
        header,
        template,
        color,
      },
    });
    const result = new Subject<T>();
    ref.onClose.subscribe(() => {
      result.next(ref.instance.result);
    });
    return result;
  }
}
