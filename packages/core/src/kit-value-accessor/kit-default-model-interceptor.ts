import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { KitModelInterceptor } from './kit-model-interceptor';

@Injectable()
export class KitDefaultModelInterceptor implements KitModelInterceptor {
  readonly viewStateChanges = new Subject<string>();

  readonly modelStateChanges = new Subject<any>();

  input(value: string, event: any) {
    this.modelStateChanges.next(value);
  }

  keyDown(event: any) {
  }

  writeValue(value: any) {
    this.viewStateChanges.next(value);
  }
}
