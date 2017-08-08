import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EditorService {
  private _params$ = new BehaviorSubject<any>(null);

  set params(params: any) {
    this._params$.next(params);
  }

  get params$() {
    return this._params$.asObservable();
  }
}
