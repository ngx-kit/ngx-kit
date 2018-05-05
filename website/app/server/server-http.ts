import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable()
export class ServerHttp {
//  constructor(@Inject(REQUEST) private req: any) {
//  }

  get(url: string, options: {responseType: 'text' | 'json'}): Observable<any> {
//    const file = this.req.readFileSync(`./dist${url}`).toString();
    return from([]);
  }
}
