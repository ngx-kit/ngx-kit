import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class KitModelInterceptor {
  viewStateChanges: Subject<string>;

  modelStateChanges: Subject<any>;

  abstract input(value: string, event: any): void;

  abstract keyDown(event: any): void;

  abstract writeValue(value: any): void;
}
