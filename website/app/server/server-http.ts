import { Inject, Injectable } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class ServerHttp {
  constructor(@Inject(REQUEST) private req: any) {
  }

  get(url: string, options: {responseType: 'text' | 'json'}): Observable<any> {
    const file = this.req.readFileSync(`./dist${url}`).toString();
    return from([options && options.responseType === 'text' ? file : JSON.parse(file)]);
  }
}
