import { Inject, Injectable } from '@angular/core';
import { kitInputMiddleware, KitInputMiddleware } from '../meta';

@Injectable()
export class KitMiddlewareManager {
  constructor(@Inject(kitInputMiddleware) private mws: KitInputMiddleware[]) {
  }

  update(mwClass: any, params: any) {
    const mw: KitInputMiddleware | undefined = this.mws.find(m => m instanceof mwClass);
    if (mw) {
      for (const key in params) {
        if (key && params.hasOwnProperty(key)) {
          if (mw.hasOwnProperty(key)) {
            mw[key] = params[key];
          } else {
            throw new Error(`Middleware "${mwClass.name}" does not have "${key}" param!`);
          }
        }
      }
    } else {
      throw new Error(`Middleware "${mwClass.name}" not provided!`);
    }
  }
}
