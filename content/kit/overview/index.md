---
route: kit/overview
title: Overview
---

Intro text

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { MdRenderService } from '@nvxme/ngx-md-render';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentResolverService implements Resolve<any> {

  constructor(private http: Http,
              private mdRender: MdRenderService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    const data = route.data;
    console.log('!resolve data', data);
    if (data['content']) {
      return this.http.get(`/content/${data['content']}`)
          .map(res => res.text())
          .map(body => {
            console.log('postBody', body);
            return this.mdRender.render(body);
          });
    } else {
      alert(404);
    }
  }

}

```
